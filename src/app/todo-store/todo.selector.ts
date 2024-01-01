import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoAdapter, TodoState } from './todo.reducer';

export const SelectTodoState = createFeatureSelector<TodoState>('Todo');

export const selectTodo = createSelector(
  SelectTodoState,
  TodoAdapter.getSelectors().selectAll
);
