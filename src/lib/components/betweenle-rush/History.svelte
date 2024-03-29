<script lang="ts">
	import store from './betweenle-rush.store';

	const getGuessClass = (i: number): string => {
		if (i < $store.guesses.length) {
			return $store.guesses[i];
		} else if (i + 1 === $store.currentGuess) {
			return 'current';
		} else {
			return 'future';
		}
	};

	let guesses = Array.from({ length: $store.maxGuesses }, (_, i) => getGuessClass(i));

	$: {
		guesses = Array.from({ length: $store.maxGuesses }, (_, i) => getGuessClass(i));
	}
</script>

<div>
	{#each guesses as guess}
		<span class={guess}></span>
	{/each}
</div>

<style>
	div {
		display: flex;
		max-width: 37rem;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	span {
		height: 1rem;
		width: 1rem;
		border-radius: 0.5rem;
	}

	.past {
		background-color: dodgerblue;
	}

	.current {
		background-color: darkorange;
	}

	.correct {
		background-color: green;
	}

	.lose {
		background-color: red;
	}

	.future {
		background-color: gray;
	}
</style>
