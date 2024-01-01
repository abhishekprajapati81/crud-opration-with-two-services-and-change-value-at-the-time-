import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodo } from '../todo-store/todo.selector';
import { Todoaction } from '../todo-store/todo.action';
import { Todo } from '../modal/todo.modal';

@Injectable({
  providedIn: 'root',
})
export class todoFacade {
  store = inject(Store);
  todolist$ = this.store.select(selectTodo);

  getalltodos() {
    this.store.dispatch(Todoaction.getAllTodos());
  }

  deleteTodos(id: number) {
    this.store.dispatch(Todoaction.deleteTodos({ id }));
  }

  addtodos(addnewtodos: Todo) {
    this.store.dispatch(Todoaction.addTodos({ addnewtodos }));
  }

  updateTodo(id: number, addtodo: Todo) {
    this.store.dispatch(Todoaction.updateTodo({ id, addtodo }));
  }
}
