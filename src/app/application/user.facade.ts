import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectUser } from '../store/user.selector';
import { UserActions } from '../store/user.action';
import { User } from '../modal/user.modal';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  store = inject(Store);
  Userlist$ = this.store.select(SelectUser);

  getAllUserData() {
    this.store.dispatch(UserActions.getAllUser());
  }

  deleteUser(id: number) {
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  addNewUserData(newUser: User) {
    this.store.dispatch(UserActions.addNewUser({ newUser }));
  }

  UpdateUsers(id: number, editUser: User) {
    this.store.dispatch(UserActions.updateUser({ id, editUser }));
  }
}
