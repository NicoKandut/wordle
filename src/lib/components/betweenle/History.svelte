<script lang="ts">
	export let max: number;
	export let current: number;
	export let win: boolean;
	export let lose: boolean;

	const getGuessClass = (guess: number): string => {
		if (guess < current) {
			return 'past';
		} else if (guess === current) {
			return win ? 'win' : lose ? 'lose' : 'current';
		} else {
			return 'future';
		}
	};

	let guesses = Array.from({ length: max }, (_, i) => i + 1).map(getGuessClass);

	$: {
		if (current) {
			guesses = Array.from({ length: max }, (_, i) => i + 1).map(getGuessClass);
		}
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

	.past,
	.current,
	.future {
		height: 1rem;
		width: 1rem;
		border-radius: 0.5rem;
	}

	.past {
		background-color: dodgerblue;
	}

	.current {
		background-color: orange;
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
