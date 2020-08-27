import { writable } from 'svelte/store';
import uuid from 'uuid/v4';

const _boards = [
	{ id: 1, title: 'TODO' },
	{ id: 2, title: 'WIP' },
	{ id: 3, title: 'DONE' }
]

const createBoards = () => {
	const boards = writable(_boards);
	const { subscribe, set, update: _update } = boards;

	const add = () => {
		_update(boards => boards.concat({ id: uuid(), title: '' }))
	}

	const remove = board => {
		if (!board) return;
		_update(boards => boards.filter(_board => _board.id !== board.id))
	}

	const update = board => {
		if (!board) return;
		_update(boards => boards.map(_board => (_board.id === board.id ? board : _board)))
	}

	return { subscribe, set, add, remove, update }
}

export const boards = createBoards();