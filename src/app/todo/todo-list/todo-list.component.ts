import { Component, inject } from '@angular/core';
import { todoFacade } from 'src/app/application/Todo.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoFacde = inject(todoFacade);

  ngOnInit(): void {
    this.todoFacde.getalltodos();
  }
  onDelete(id: number) {
    this.todoFacde.deleteTodos(id);
  }
}
