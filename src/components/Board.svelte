<script lang="ts">
	import Item from './Item.svelte';

	export let board = null
	export let items = []
</script>

{#if board}
	<div class="main">
		<div class="board">
			{#each board as b}
				<div class="board-item">
					{b.title}
					{#each items as item (item.id)}
						{#if item.boardId === b.id}
							<Item item={item} />
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.main {
		padding: 0 20px;
	}
	.board {
		display: flex;
		justify-content: space-between;
	}
	.board-item {
		width: 200px;
		text-align: center;
		margin: 10px 0;
		padding: 10px 0;
		border: 1px solid $gray7;
		border-radius: 10px;
	}
</style>