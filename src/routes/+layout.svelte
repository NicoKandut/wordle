<script>
	import Header from '$lib/components/common/Header.svelte';

	import './styles.css';
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<footer>Made by Nico</footer>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100vh;
		align-items: center;
		gap: 2rem;
	}

	main {
		flex-grow: 1;
	}

	footer {
		background-color: lightgray;
		align-self: stretch;
		text-align: center;
		padding: 1rem;
		display: flex;
		justify-content: center;
		font-weight: bold;
		color: gray;
	}
</style>
