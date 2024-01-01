import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../service/todo.service';
import { Todoaction } from './todo.action';
import { map, mergeMap, tap } from 'rxjs';

Injectable();

export class TodoEffect {
  action$ = inject(Actions);
  _httpService = inject(TodoService);

  loadTodos$ = createEffect(() =>
    this.action$.pipe(
      ofType(Todoaction.getAllTodos),
      mergeMap(() =>
        this._httpService
          .getTodo()
          .pipe(map((Todo) => Todoaction.getAllTodoSucc({ Todo })))
      )
    )
  );

  DeleteTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(Todoaction.deleteTodos),
      mergeMap((action) =>
        this._httpService
          .deleteTodo(action.id)
          .pipe(map((id) => Todoaction.deleteTodosucc({ id: action.id })))
      )
    )
  );

  addUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(Todoaction.addTodos),
      mergeMap((action) =>
        this._httpService
          .addNewTodos(action.addnewtodos)
          .pipe(
            map((addnewtodo) =>
              Todoaction.addTodosucc({ addnewtodos: addnewtodo })
            )
          )
      )
    )
  );

  Updatetodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(Todoaction.updateTodo),
      mergeMap((action) =>
        this._httpService.updateTodo(action.id, action.addtodo).pipe(
          tap(() => {
            const msg = 'todo updated';
            alert(msg);
          }),
          map((addtodo) =>
            Todoaction.updateTodosucc({ id: action.id, addtodo })
          )
        )
      )
    )
  );
}
