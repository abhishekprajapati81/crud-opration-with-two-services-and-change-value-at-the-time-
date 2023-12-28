import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../modal/todo.modal';

export interface TodoState extends EntityState<Todo> {}
export const TodoAdapter = createEntityAdapter<Todo>();
export const TodoitialState: TodoState = TodoAdapter.getInitialState();
