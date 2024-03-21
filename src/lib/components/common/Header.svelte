<script>
	import { base } from '$app/paths';
</script>

<header>
	<div>
		<a href="{base}/">Home</a>
		<span />
		<a href="{base}/betweenle">Betweenle</a>
		<a href="{base}/pokedexle">Pokedexle</a>
	</div>
</header>

<style>
	div {
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 800px;
	}

	header {
		background-color: lightgray;
		align-self: stretch;
		text-align: center;
		padding: 1rem;
		display: flex;
		justify-content: center;
	}

	a {
		font-weight: bold;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: gray;
		border-radius: 0.25rem;
	}

	a:hover {
		background-color: dodgerblue;
		color: white;
	}

	span {
		flex-grow: 1;
	}
</style>
