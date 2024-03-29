<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import store from '$lib/components/betweenle-rush/betweenle-rush.store';

	const dispatch = createEventDispatcher();

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

<div>
	{#each 'abcdefghijklmnopqrstuvwxyz' as letter}
		<button
			disabled={!getAlphabetEnabled(letter, $store.attempt, $store.upperWord, $store.lowerWord)}
			on:click={() => dispatch('keypress', { key: letter })}
		>
			{letter}
		</button>
	{/each}
</div>

<style>
	div {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(13, 1fr);
	}

	button {
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

	button:not(:disabled):hover {
		background-color: black;
	}

	button:not(:disabled):active {
		background-color: darkgray;
	}

	button:disabled {
		background-color: lightgray;
	}
</style>
