import { TodoItem } from "./todo-item";


export class Model {
  user: string = "Adam";
  items: TodoItem[] = [
    new TodoItem("Buy Flowers", false),
    new TodoItem("Get Shoes", true),
    new TodoItem("Call James", false)
  ];

  constructor(){}
}