<script>
	import './styles.css';
</script>

<div>
	<header>Navigation</header>

	<main>
		<slot />
	</main>

	<footer>Footer stuff</footer>
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
</style>
