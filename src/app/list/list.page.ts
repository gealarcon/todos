import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'
import { Todo } from '../todo'

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(public _projectService: ProjectService) { }

  newTodo: Todo = new Todo();
  

  ngOnInit() {
  }

  addTodo() {
    if (!this.newTodo.title) {
      return;
    }

    this._projectService.addTodo(this.newTodo)
    this.newTodo = new Todo();
  }

  deleteTodo(todo) {
    this._projectService.deleteTodo(todo.id)
  }

  get todos() {
    return this._projectService.getAllTodos();
  }


}
