<script lang="ts">
	import store from './betweenle.store';

	const getGuessClass = (guess: number): string => {
		if (guess < $store.currentGuess) {
			return 'past';
		} else if (guess === $store.currentGuess) {
			return $store.win ? 'win' : $store.lose ? 'lose' : 'current';
		} else {
			return 'future';
		}
	};

	let guesses = Array.from({ length: $store.maxGuesses }, (_, i) => i + 1).map(getGuessClass);

	$: {
		guesses = Array.from({ length: $store.maxGuesses }, (_, i) => i + 1).map(getGuessClass);
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
		align-items: center;
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

	.win {
		background-color: green;
	}

	.lose {
		background-color: red;
	}

	.future {
		background-color: gray;
	}
</style>
