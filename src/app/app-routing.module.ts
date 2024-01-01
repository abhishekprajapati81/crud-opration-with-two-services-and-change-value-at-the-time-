import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
    children: [
      {
        path: 'add',
        component: UserAddComponent,
      },
      {
        path: 'edit/:id',
        component: UserEditComponent,
      },
    ],
  },
  {
    path: 'Todo',
    component: TodoListComponent,
    children: [
      {
        path: 'addtodos',
        component: TodoAddComponent,
      },
      {
        path: 'Todoedit/:id',
        component: TodoEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
