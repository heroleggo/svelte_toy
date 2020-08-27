<script lang="ts">
	export let item = null;

	const toLeft = () => {
		console.log('clicked');
		if (item.boardId !== 1) item.boardId -= 1;
		console.log(item);
	}

	const toRight = () => {
		console.log('clicked');
		if (item.boardId !== 3) item.boardId += 1;
		console.log(item);
	}
</script>

{#if item}
	<div class="item">
		<span>{item.title}</span>
		<div class="btn-cover">
			<button on:click={toLeft}>to Left</button>
			<button on:click={toRight}>to Right</button>
		</div>
	</div>
{/if}

<style lang="scss">
.item {
	background-color: $gray2;
	border-radius: 10px;
	padding: 10px;
	margin: 5px 5px;
}
.btn-cover {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>