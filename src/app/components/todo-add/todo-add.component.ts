import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-todo-add',
	templateUrl: './todo-add.component.html',
	styleUrls: [ './todo-add.component.css' ]
})
export class TodoAddComponent implements OnInit {
	@Output() addInput: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	saveTodo(todo) {
		this.addInput.emit({ action: todo.value, done: false });
	}
}
