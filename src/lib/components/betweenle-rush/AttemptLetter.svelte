<script lang="ts">
	import store from '$lib/components/betweenle-rush/betweenle-rush.store';
	export let letter: string;
	export let index: number;

	const getAlphabetEnabled = (
		letter: string,
		attempt: string,
		upperWord: string,
		lowerWord: string,
		index: number
	) => {
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

	$: impossible =
		letter !== '•' &&
		letter !== ' ' &&
		!getAlphabetEnabled(letter, $store.attempt, $store.upperWord, $store.lowerWord, index);
</script>

<span
	class:win={$store.win}
	class:lose={$store.lose}
	class:incorrect={$store.incorrect}
	class:up={$store.correct === 'up'}
	class:down={$store.correct === 'down'}
	class:empty={letter === '•' || letter === ' '}
	class:impossible
>
	{letter}
</span>

<style>
	span {
		background-color: darkorange;
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

	.empty {
		border: solid black 2px;
		color: black;
		background-color: white;
	}

	.win {
		background-color: green;
	}

	.lose,
	.impossible {
		background-color: red;
	}

	.incorrect {
		animation: shake 0.1s ease-out;
	}

	.up {
		animation: up 0.3s ease-out;
	}

	.down {
		animation: down 0.3s ease-out;
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

	@keyframes up {
		from {
			transform: translate(0, 0);
		}
		to {
			transform: translate(0, -4.5rem);
		}
	}

	@keyframes down {
		from {
			transform: translate(0, 0);
		}
		to {
			transform: translate(0, 4.5rem);
		}
	}
</style>
