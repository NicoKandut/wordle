<script lang="ts">
	import Meter from '$lib/components/betweenle/Meter.svelte';
	import store from '$lib/components/betweenle/betweenle.store';
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
	<div></div>
</section>

<style>
	div {
		display: flex;
		gap: var(--column-gap);
	}

	div.board {
		flex-direction: column;
		align-items: center;
	}

	section {	
		display: grid;
		grid-template-columns: var(--column-size) calc(5 * var(--column-size) + 4 * var(--column-gap));
		gap: var(--column-gap);	
		max-width: 100%;
	}
</style>
