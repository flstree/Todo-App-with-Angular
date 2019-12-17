import { Component } from '@angular/core';
import { Model } from './services/model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	model = new Model();

	getInput($event) {
		this.model.addTodo($event);
	}

	removeItem($event) {
		console.log($event);
		this.model = this.model.deleteTodoById($event);
	}
}
