export class TodoItem {
	id: number;
	action: string = '';
	done: boolean = false;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
