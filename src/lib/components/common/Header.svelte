<script>
	import { base } from '$app/paths';
</script>

<header>
	
		<a href="{base}/">Home</a>
		<span />
		<a href="{base}/betweenle">Betweenle</a>
		<a href="{base}/pokedexle">Pokedexle</a>
</header>

<style>

	header {		
		background-color: lightgray;
		width: 100%;
		display: flex;
		text-align: center;	
		padding: 1rem;
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
