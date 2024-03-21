<script lang="ts">
	export let name: string;
</script>

<div>
	{#each name as letter}
		<span>{letter}</span>
	{/each}
</div>

<style>
	div {
		display: flex;
		width: 22rem;
	}

	span {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
		width: 2rem;
		background-color: dodgerblue;
		color: white;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 32px;
	}
</style>
