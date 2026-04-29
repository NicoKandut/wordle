<script lang="ts">
	import Board from '$lib/components/betweenle/Board.svelte';
	import History from '$lib/components/betweenle/History.svelte';
	import Keyboard from '$lib/components/betweenle/Keyboard.svelte';
	import Wins from '$lib/components/betweenle/Wins.svelte';
	import store from '$lib/components/betweenle/betweenle.store';
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

	<h1>Betweenle</h1>
	<History />
	<Board on:click={() => inputField.focus()} />
	<Keyboard on:keypress={(event) => fireInput(event.detail.key)} />
	<button id="main-button" on:click={() => fireInput('Enter')}>
		{$store.ended ? 'Next' : 'Guess'}
	</button>
	<Wins />
</section>

<style>
	:global(:root) {
		--nr-columns: 6;
		--nr-gaps: calc(var(--nr-columns) - 1);
		--column-gap: min(0.5rem, calc(100vw / 54));
		--column-size: min(4rem, calc(100vw - var(--nr-gaps) * var(--column-gap)) / var(--nr-columns));
		--fs-letter: min(32px, var(--column-size) * 0.5);
		--fs-meter: min(18px, var(--column-size) * 0.25);
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
		padding-inline: var(--column-gap);
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
