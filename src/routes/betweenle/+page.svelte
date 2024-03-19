<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import { guessable, words } from '$lib/words';

	let wordIndex = Math.floor(Math.random() * words.length);
	let word = words[wordIndex];

	let upper = 'aaaaa';
	$: upperIndex = upper === 'aaaaa' ? 0 : guessable.indexOf(upper);
	let lower = 'zzzzz';
	$: lowerIndex = lower === 'zzzzz' ? guessable.length : guessable.indexOf(lower);
	let attempt = '';

	let win = false;
	let incorrect = false;

	$: distanceUpper =
		Math.round(((guessable.indexOf(word) - upperIndex) / guessable.length) * 10000) / 100;
	$: distanceLower =
		Math.round(((lowerIndex - guessable.indexOf(word)) / guessable.length) * 10000) / 100;

	console.log(distanceUpper);
	console.log(distanceLower);

	$: renderedAttempt = (attempt + '•').padEnd(5).substring(0, 5);
	$: {
		if (incorrect) {
			setTimeout(() => {
				incorrect = false;
			}, 100);
		}
	}

	function getAttemptClass(letter: string): string | null | undefined {
		if (letter === '•') {
			return 'dot';
		}

		if (letter === ' ') {
			return 'empty';
		}

		return 'entered';
	}

	const inputListener = (event: KeyboardEvent) => {
		incorrect = false;

		if (event.key === 'Enter' && attempt.length === 5) {
			if (attempt === word) {
				win = true;
				const wonWords = new Set(JSON.parse(localStorage.getItem('betweenle:wins') ?? '[]'));
				wonWords.add(word);
				localStorage.setItem('betweenle:wins', JSON.stringify(Array.from(wonWords)));
				return;
			}

			if (attempt.localeCompare(upper) <= 0) {
				incorrect = true;
				return;
			}

			if (attempt.localeCompare(lower) >= 0) {
				incorrect = true;
				return;
			}

			if (!guessable.includes(attempt)) {
				incorrect = true;
				return;
			}

			if (attempt.localeCompare(word) > 0) {
				lower = attempt;
				attempt = '';
				return;
			}

			if (attempt.localeCompare(word) < 0) {
				upper = attempt;
				attempt = '';
				return;
			}
		}

		// is backspace
		if (event.key === 'Backspace') {
			if (attempt.length > 0) {
				attempt = attempt.slice(0, -1);
			}
			return;
		}

		if (attempt.length < 5 && event.key.length === 1 && event.key.match(/[a-z]/)) {
			attempt += event.key;
		}
	};

	onMount(() => {
		browser && document.addEventListener('keydown', inputListener);
	});

	onDestroy(() => {
		browser && document.removeEventListener('keydown', inputListener);
	});
</script>

<section class="page">
	<section class="game">
		<div class="meter">
			<span>
				{upper === 'aaaaa' ? '?' : distanceUpper}
			</span>
			<div class="connector">
				<div class="line"></div>
				<div
					class="marker"
					style="top: {(distanceUpper / (distanceUpper + distanceLower)) * 100}%;"
				/>
			</div>
			<span>
				{lower === 'zzzzz' ? '?' : distanceLower}
			</span>
		</div>
		<div class="board" class:win>
			<div class="upper">
				{#each upper as letter}
					<span>{letter}</span>
				{/each}
			</div>
			<div class="attempt" class:incorrect>
				{#each renderedAttempt as letter}
					<span class={getAttemptClass(letter)}>{letter}</span>
				{/each}
			</div>
			<div class="lower">
				{#each lower as letter}
					<span>{letter}</span>
				{/each}
			</div>
		</div>
		<div></div>
	</section>

	{#if win}
		<button
			on:click={() => {
				win = false;
			}}
		>
			Next
		</button>
	{/if}
</section>

<style>
	div {
		display: flex;
		gap: 0.5rem;
	}

	div.board {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.game {
		display: grid;
		grid-template-columns: 4rem 22rem 4rem;
		gap: 1rem;
	}

	.meter {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.meter .connector {
		position: relative;
		flex-grow: 1;
		width: 4px;
		background-color: dodgerblue;
	}

	.meter .connector::before {
		box-sizing: border-box;
		content: '';
		position: absolute;
		top: -0.5rem;
		left: -8px;
		width: 20px;
		height: 20px;
		border: solid 10px transparent;
		border-top-color: dodgerblue;
	}

	.meter .connector::after {
		box-sizing: border-box;
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: -8px;
		width: 20px;
		height: 20px;
		border: solid 10px transparent;
		border-bottom-color: dodgerblue;
	}

	.meter span {
		width: 4rem;
		height: 3rem;
		background-color: dodgerblue;
		font-size: 18px;
	}

	.meter .marker {
		position: absolute;
		height: 12px;
		width: 12px;
		background-color: orange;
		left: -4px;
		border-radius: 8px;
		z-index: 1;
		transform: translateY(-50%);
	}

	span {
		box-sizing: border-box;
		display: flex;
		width: 4rem;
		height: 4rem;
		align-items: center;
		justify-content: center;
		font-size: 32px;
		font-weight: bold;
		text-transform: uppercase;
		color: white;
		font-family:
			Arial,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}

	.upper span,
	.lower span {
		background-color: dodgerblue;
	}

	.dot,
	.empty {
		border: solid black 2px;
	}

	.entered {
		background-color: orange;
	}

	.win .entered {
		background-color: green;
	}

	.incorrect {
		animation: shake 0.1s ease-out;
	}

	@keyframes shake {
		0% {
			transform: translate(0, 0);
		}
		33% {
			transform: translate(-5px, 0);
		}
		66% {
			transform: translate(5px, 0);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>
