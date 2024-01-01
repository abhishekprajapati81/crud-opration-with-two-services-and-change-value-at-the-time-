import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from '../modal/user.modal';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.action';
import { state } from '@angular/animations';

export interface UserState extends EntityState<User> {}
export const Useradapter = createEntityAdapter<User>();
export const initialState: UserState = Useradapter.getInitialState();

export const UserReducer = createReducer<UserState>(
  initialState,
  on(UserActions.getAllUserSucc, (state, { UserList }) => {
    console.log(UserList, 'userlist');
    console.log(state, 'state');
    return Useradapter.setAll(UserList, state);
  }),
  on(UserActions.deleteUserSucc, (state, { id }) => {
    return Useradapter.removeOne(id, { ...state });
  }),
  on(UserActions.addNewUserSucc, (state, { newUser }) => {
    return Useradapter.addOne(newUser, state);
  }),
  on(UserActions.updateUserSecc, (state, { id, editUser }) => {
    return Useradapter.updateOne({ id, changes: editUser }, state);
  })
);
