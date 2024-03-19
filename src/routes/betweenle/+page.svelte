<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import { guessable, words } from '$lib/words';
	import Meter from '$lib/components/betweenle/Meter.svelte';
	import History from '$lib/components/betweenle/History.svelte';

	let wordIndex = Math.floor(Math.random() * words.length);
	let word = words[wordIndex];

	let wonWords = browser
		? new Set(JSON.parse(localStorage.getItem('betweenle:wins') ?? '[]'))
		: new Set();

	let upper = 'aaaaa';
	$: upperIndex = upper === 'aaaaa' ? 0 : guessable.indexOf(upper);
	let lower = 'zzzzz';
	$: lowerIndex = lower === 'zzzzz' ? guessable.length : guessable.indexOf(lower);
	let attempt = '';

	let inputField: HTMLInputElement;

	let win = false;
	let lose = false;
	let incorrect = false;
	let visible = false;
	let maxGuesses = 15;
	let currentGuess = 1;

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

	const reset = () => {
		win = false;
		lose = false;
		attempt = '';
		upper = 'aaaaa';
		lower = 'zzzzz';
		wordIndex = Math.floor(Math.random() * words.length);
		currentGuess = 1;
	};

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

		if (event.key === 'Enter') {
			if (win || lose) {
				reset();
				return;
			}

			if (attempt.length === 5) {
				if (attempt === word) {
					win = true;
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
					visible = true;
					currentGuess++;
					return;
				}

				if (attempt.localeCompare(word) < 0) {
					upper = attempt;
					attempt = '';
					visible = true;
					currentGuess++;
					return;
				}
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
		inputField.focus();
	});
</script>

<input bind:this={inputField} type="text" on:keydown={inputListener} class="hidden" />

<section class="page">
	<h1>Betweenle</h1>

	<History max={maxGuesses} current={currentGuess} {win} {lose} />

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<section class="game" on:click={() => inputField.focus()}>
		<Meter {visible} {distanceUpper} {distanceLower} />
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

	<button on:click={reset} class:invisible={!win && !lose} disabled={!win && !lose}> Next </button>

	<h3>{wonWords.size || 'no'} wins</h3>
	<ol>
		{#each wonWords.values() as word}
			<li>{word}</li>
		{/each}
	</ol>
</section>

<style>
	.hidden {
		position: absolute;
		opacity: 0;
	}

	.invisible {
		opacity: 0;
	}

	ol {
		list-style-type: none;
		padding-left: unset;
		display: flex;
		flex-wrap: wrap;
		max-width: 25.5rem;
		gap: 0.5rem;
		justify-content: center;
	}

	li {
		width: 6rem;
		background-color: green;
		color: white;
		text-transform: uppercase;
		text-align: center;
		padding-block: 0.5rem;
		font-weight: bold;
	}

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
		gap: 1rem;
	}

	.game {
		display: grid;
		grid-template-columns: 4rem 22rem 4rem;
		gap: 1rem;
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
		color: black;
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
