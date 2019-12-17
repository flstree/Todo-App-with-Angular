import { TodoItem } from './todo-item';

export class Model {
	user: string = 'Adam';
	items: TodoItem[] = [
		new TodoItem('Buy Flowers', false),
		new TodoItem('Get Shoes', true),
		new TodoItem('Call James', false)
	];

	constructor() {}

	newItem(item: string) {
		this.items.push(new TodoItem(item, false));
	}

	removeItem(id: number) {
		this.items.splice(id, 1);
	}
}
