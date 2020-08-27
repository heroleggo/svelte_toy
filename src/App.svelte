<script lang="ts">
	import Head from '@/components/Header.svelte';
	import Board from '@/components/Board.svelte';

	const board = [
		{ id: 1, title: 'TODO' },
		{ id: 2, title: 'WIP' },
		{ id: 3, title: 'DONE' }
	]

	const items = [
		{ id: 1, boardId: 1, title: 'work1'},
		{ id: 2, boardId: 1, title: 'work2'},
		{ id: 3, boardId: 2, title: 'work3'},
		{ id: 4, boardId: 2, title: 'work4'},
		{ id: 5, boardId: 3, title: 'work5'},
	]
</script>

<main>
	<Head />
	<Board board={board} items={items}/>
</main>

<style lang="scss">
	* {
		font-family: $font-family;
	}
</style>