<script lang="ts">
	import Board from '$lib/components/betweenle-rush/Board.svelte';
	import History from '$lib/components/betweenle-rush/History.svelte';
	import Keyboard from '$lib/components/betweenle-rush/Keyboard.svelte';
	import store from '$lib/components/betweenle-rush/betweenle-rush.store';
	import { onMount } from 'svelte';

	let inputField: HTMLInputElement;

	const fireInput = (key: string) => {
		inputField.focus();
		inputListener(new KeyboardEvent('keypress', { key }));
	};

	const inputListener = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			store.submit();
			return;
		}

		if (event.key === 'Backspace' && !$store.ended) {
			store.removeLetter();
			return;
		}

		store.addLetter(event.key);
	};

	onMount(() => {
		inputField.focus();
	});
</script>

<section class="page">
	<!-- Hidden Input to use native keyboard -->
	<input bind:this={inputField} type="text" on:keydown={inputListener} class="hidden" />

	<h1>Betweenle Rush</h1>
	<p>Guess as many words as you can with 100 guesses.</p>

	<History />
	<Board on:click={() => inputField.focus()} />
	<Keyboard on:keypress={(event) => fireInput(event.detail.key)} />

	<button id="main-button" on:click={() => fireInput('Enter')}>
		{$store.ended ? 'Next' : 'Guess'}
	</button>

	<p class="wins">{$store.guesses.filter((x) => x === 'correct').length} correct guesses</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.hidden {
		position: absolute;
		opacity: 0;
	}

	h1 {
		font-size: 3rem;
		font-weight: bold;
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
</style>
