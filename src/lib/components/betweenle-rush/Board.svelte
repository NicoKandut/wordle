<script lang="ts">
	import Meter from '$lib/components/betweenle-rush/Meter.svelte';
	import store from '$lib/components/betweenle-rush/betweenle-rush.store';
	import AttemptLetter from './AttemptLetter.svelte';
	import SimpleLetter from './SimpleLetter.svelte';

	$: renderedAttempt = ($store.attempt + '•').padEnd(5).substring(0, 5);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="game" on:click>
	<Meter />
	<div class="board" class:win={$store.win} class:lose={$store.lose}>
		<div class="upper">
			{#each $store.upperWord as letter}
				<SimpleLetter {letter} />
			{/each}
		</div>
		<div class="attempt {$store.correct}" class:incorrect={$store.incorrect}>
			{#each renderedAttempt as letter, index}
				<AttemptLetter {letter} {index}></AttemptLetter>
			{/each}
		</div>
		<div class="lower">
			{#each $store.lowerWord as letter}
				<SimpleLetter {letter} />
			{/each}
		</div>
	</div>
	<div class="score">{$store.guesses.filter((x) => x === 'correct').length}</div>
</section>

<style>
	div {
		display: flex;
		gap: 0.5rem;
	}

	div.board {
		flex-direction: column;
		align-items: center;
	}

	.score {
		width: 4rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		place-self: center;
		background-color: green;
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

	section {
		display: grid;
		grid-template-columns: 4rem 22rem 4rem;
		gap: 1rem;
	}
</style>
