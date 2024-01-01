import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../modal/todo.modal';

export const Todoaction = createActionGroup({
  source: 'Todo action',
  events: {
    getAllTodos: emptyProps(),
    getAllTodoSucc: props<{ Todo: Todo[] }>(),

    //delete
    deleteTodos: props<{ id: number }>(),
    deleteTodosucc: props<{ id: number }>(),

    // addnewUSer
    addTodos: props<{ addnewtodos: Todo }>(),
    addTodosucc: props<{ addnewtodos: Todo }>(),

    // updateTodo
    updateTodo: props<{ id: number; addtodo: Todo }>(),
    updateTodosucc: props<{ id: number; addtodo: Todo }>(),
  },
});
