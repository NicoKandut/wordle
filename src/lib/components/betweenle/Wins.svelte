<script lang="ts">
	import winStore from '$lib/components/betweenle/betweenle-wins.store';
</script>

<h3>{$winStore.size || 'no'} wins</h3>
<ol>
	{#each $winStore.values() as word}
		<li>{word}</li>
	{/each}
</ol>

<style>
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
</style>
