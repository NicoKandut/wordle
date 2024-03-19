<script lang="ts">
	import { compact } from '$lib/number-format';

	export let visible: boolean;
	export let distanceUpper: number;
	export let distanceLower: number;

	$: percent = (distanceUpper / (distanceUpper + distanceLower)) * 100;
</script>

<div class="meter">
	<span>
		{visible ? compact(distanceUpper) : '?'}
	</span>
	<div class="connector">
		<div class="line"></div>
		{#if visible}
			<div class="marker" style="top: {percent}%;" />
		{/if}
	</div>
	<span>
		{visible ? compact(distanceLower) : '?'}
	</span>
</div>

<style>
	.meter {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.meter .connector {
		position: relative;
		flex-grow: 1;
		width: 4px;
		background-color: dodgerblue;
	}

	.meter .connector::before {
		box-sizing: border-box;
		content: '';
		position: absolute;
		top: 0;
		left: -8px;
		width: 20px;
		height: 20px;
		border: solid 10px transparent;
		border-top-color: dodgerblue;
	}

	.meter .connector::after {
		box-sizing: border-box;
		content: '';
		position: absolute;
		bottom: 0;
		left: -8px;
		width: 20px;
		height: 20px;
		border: solid 10px transparent;
		border-bottom-color: dodgerblue;
	}

	.meter span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 4rem;
		height: 3rem;
		background-color: dodgerblue;
		color: white;
		font-size: 18px;
		font-weight: bold;
	}

	.meter .marker {
		position: absolute;
		height: 12px;
		width: 12px;
		background-color: orange;
		left: -4px;
		border-radius: 8px;
		z-index: 1;
		transform: translateY(-50%);
	}
</style>
