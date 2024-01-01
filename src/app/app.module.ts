import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserFacade } from './application/user.facade';
import { UserReducer } from './store/user.reducer';
import { UserEffect } from './store/user.effect';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoReducer } from './todo-store/todo.reducer';
import { TodoEffect } from './todo-store/todo.effect';
import { todoFacade } from './application/Todo.facade';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ user: UserReducer, Todo: TodoReducer }),
    EffectsModule.forRoot([UserEffect, TodoEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
  ],
  providers: [UserFacade, todoFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
