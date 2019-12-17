import { TodoItem } from './todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class Model {
	user: string = 'Adam';
	lastId: number = 0;
	todos: TodoItem[] = [];

	constructor() {}

	addTodo(todo: TodoItem): Model {
		if (!todo.id) {
			todo.id = ++this.lastId;
		}
		this.todos.push(todo);
		return this;
	}

	deleteTodoById(id: number): Model {
		if (this.todos.length < 2) {
			this.todos = [];
		} else {
			this.todos = this.todos.filter((todo) => todo.id !== id);
		}
		return this;
	}

	updateTodoById(id: number, values: Object = {}): TodoItem {
		let todo = this.getTodoById(id);
		if (!todo) {
			return null;
		}
		Object.assign(todo, values);
		return todo;
	}

	getAllTodos(): TodoItem[] {
		return this.todos;
	}

	getTodoById(id: number): TodoItem {
		return this.todos.filter((todo) => todo.id === id).pop();
	}

	toggleTodoComplete(todo: TodoItem) {
		let updateTodo = this.updateTodoById(todo.id, {
			done: !todo.done
		});
		return updateTodo;
	}
}
