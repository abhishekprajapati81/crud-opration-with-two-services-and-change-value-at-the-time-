import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { User } from '../modal/user.modal';

export const UserActions = createActionGroup({
  source: 'User Action',
  events: {
    getAllUser: emptyProps(),
    getAllUserSucc: props<{ UserList: User[] }>(),
    getAllUserFail: props<{ error: string }>(),

    addNewUser: props<{ newUser: User }>(),
    addNewUserSucc: props<{ newUser: User }>(),
    addNewUserFail: props<{ error: string }>(),

    updateUser: props<{ id: number; editUser: User }>(),
    updateUserSecc: props<{ id: number; editUser: User }>(),
    updateUserFail: props<{ error: string }>(),

    deleteUser: props<{ id: number }>(),
    deleteUserSucc: props<{ id: number }>(),
    deleteUserFail: props<{ error: string }>(),
  },
});
