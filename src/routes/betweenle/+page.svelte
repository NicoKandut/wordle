<script lang="ts">
	import { onMount } from 'svelte';
	import Meter from '$lib/components/betweenle/Meter.svelte';
	import History from '$lib/components/betweenle/History.svelte';
	import store from '../../lib/components/betweenle/betweenle.store';
	import winStore from '$lib/components/betweenle/betweenle-wins.store';

	let inputField: HTMLInputElement;

	$: renderedAttempt = ($store.attempt + '•').padEnd(5).substring(0, 5);

	const getAttemptClass = (letter: string) => {
		if (letter === '•') {
			return 'dot';
		}

		if (letter === ' ') {
			return 'empty';
		}

		return 'entered';
	};

	const inputListener = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			store.submit();
			return;
		}

		if (event.key === 'Backspace') {
			store.removeLetter();
			return;
		}

		store.addLetter(event.key);
	};

	onMount(() => {
		inputField.focus();
	});

	const getAlphabetEnabled = (
		letter: string,
		attempt: string,
		upperWord: string,
		lowerWord: string
	) => {
		const index = attempt.length;

		if (upperWord.substring(0, index) === lowerWord.substring(0, index)) {
			return upperWord[index] <= letter && lowerWord[index] >= letter;
		}

		if (upperWord.substring(0, index) === attempt.substring(0, index)) {
			return upperWord[index] <= letter;
		}

		if (lowerWord.substring(0, index) === attempt.substring(0, index)) {
			return lowerWord[index] >= letter;
		}

		return true;
	};
</script>

<input bind:this={inputField} type="text" on:keydown={inputListener} class="hidden" />

<section class="page">
	<h1>Betweenle</h1>

	<History
		max={$store.maxGuesses}
		current={$store.currentGuess}
		win={$store.win}
		lose={$store.lose}
	/>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<section class="game" on:click={() => inputField.focus()}>
		<Meter />
		<div class="board" class:win={$store.win}>
			<div class="upper">
				{#each $store.upperWord as letter}
					<span>{letter}</span>
				{/each}
			</div>
			<div class="attempt" class:incorrect={$store.incorrect}>
				{#each renderedAttempt as letter}
					<span class={getAttemptClass(letter)}>{letter}</span>
				{/each}
			</div>
			<div class="lower">
				{#each $store.lowerWord as letter}
					<span>{letter}</span>
				{/each}
			</div>
		</div>
		<div></div>
	</section>

	<div class="keys">
		{#each 'abcdefghijklmnopqrstuvwxyz' as letter}
			<button
				disabled={!getAlphabetEnabled(letter, $store.attempt, $store.upperWord, $store.lowerWord)}
				on:click={() => {
					inputListener(new KeyboardEvent('keypress', { key: letter }));
					inputField.focus();
				}}
			>
				{letter}
			</button>
		{/each}
	</div>

	<button
		id="main-button"
		on:click={() => {
			inputListener(new KeyboardEvent('keypress', { key: 'Enter' }));
			inputField.focus();
		}}
	>
		{$store.ended ? 'Next' : 'Guess'}
	</button>

	<h3>{$winStore.size || 'no'} wins</h3>
	<ol>
		{#each $winStore.values() as word}
			<li>{word}</li>
		{/each}
	</ol>
</section>

<style>
	.hidden {
		position: absolute;
		opacity: 0;
	}

	#main-button {
		width: 10rem;
		height: 3rem;
		background-color: darkorange;
		color: white;
		border: unset;
		border-radius: 0.5rem;
		font-size: 18px;
		text-transform: uppercase;
		font-weight: bold;
	}

	#main-button:hover {
		background-color: orange;
	}

	#main-button:active {
		background-color: darkorange;
	}

	.invisible {
		opacity: 0;
	}

	.keys {
		display: grid;
		grid-template-columns: repeat(13, 1fr);
	}

	.keys button {
		background-color: grey;
		color: white;
		width: 2rem;
		height: 2rem;
		border: unset;
		border-radius: 1rem;
		font-size: 18px;
		text-transform: uppercase;
		line-height: 1.9rem;
		text-align: center;
	}

	.keys button:not(:disabled):hover {
		background-color: black;
	}

	.keys button:not(:disabled):active {
		background-color: darkgray;
	}

	.keys button:disabled {
		background-color: lightgray;
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
