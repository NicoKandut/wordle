<script lang="ts">
	export let letter: string;
</script>

<span>{letter}</span>

<style>
	span {
		background-color: dodgerblue;
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
</style>
