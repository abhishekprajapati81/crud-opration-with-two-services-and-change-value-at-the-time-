import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../modal/todo.modal';

export const Todoaction = createActionGroup({
  source: 'Todo action',
  events: {
    getAllTodos: emptyProps(),
    getAllTodoSucc: props<{ Todo: Todo[] }>(),
    getAllTodoFail: props<{ error: string }>(),
  },
});
