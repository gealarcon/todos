import { Injectable } from '@angular/core';
import { Todo } from './todo'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  usedId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  addTodo(newTodo) {

    if (!newTodo.id) {
      newTodo.id = ++this.usedId;
    }

    this.todos.push(newTodo);
    return this;
  }

  deleteTodo(id) {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  getAllTodos() {
    return this.todos;
  }




}
