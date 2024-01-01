import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../modal/todo.modal';
import { createReducer, on } from '@ngrx/store';
import { Todoaction } from './todo.action';
import { state } from '@angular/animations';

export const TodoAdapter = createEntityAdapter<Todo>();
export interface TodoState extends EntityState<Todo> {}
export const TodoitialState: TodoState = TodoAdapter.getInitialState();

export const TodoReducer = createReducer<TodoState>(
  TodoitialState,
  on(Todoaction.getAllTodoSucc, (state, { Todo }) => {
    return TodoAdapter.setAll(Todo, state);
  }),
  on(Todoaction.deleteTodosucc, (state, { id }) => {
    return TodoAdapter.removeOne(id, { ...state });
  }),
  on(Todoaction.addTodosucc, (state, { addnewtodos: addnewtodo }) => {
    return TodoAdapter.addOne(addnewtodo, { ...state });
  }),
  on(Todoaction.updateTodosucc, (state, { id, addtodo }) => {
    return TodoAdapter.updateOne({ id, changes: addtodo }, state);
  })
);
