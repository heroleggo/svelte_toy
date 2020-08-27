<script lang="ts">
	export let item = null;
	let hover: boolean = false;
</script>

{#if item}
	<div class="item" class:shadow={hover} on:mouseenter={() => hover = true} on:mouseleave={() => hover = false}>
		<span>{item.title}</span>
	</div>
{/if}

<style lang="scss">
.item {
	transition: box-shadow 0.25s ease-in;
}
</style>