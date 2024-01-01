import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { todoFacade } from 'src/app/application/Todo.facade';
import { Todo } from 'src/app/modal/todo.modal';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoacade = inject(todoFacade);
  todoAddForm!: FormGroup;
  ngOnInit() {
    this.todoAddForm = new FormGroup({
      task: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });
  }

  onadd(todo: Todo) {
    console.log(this.todoAddForm.value);
    this.todoacade.addtodos(todo);
  }
}
