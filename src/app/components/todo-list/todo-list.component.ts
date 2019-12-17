import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Model } from '../../services/model';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: [ './todo-list.component.css' ]
})
export class TodoListComponent implements OnInit {
	@Input() model: Model;
	@Output() deleteItem: EventEmitter<number> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	getName() {
		return this.model.user;
	}

	getTodoItems() {
		return this.model.items;
	}

	removeItem(id: number) {
		this.deleteItem.emit(id);
	}
}
