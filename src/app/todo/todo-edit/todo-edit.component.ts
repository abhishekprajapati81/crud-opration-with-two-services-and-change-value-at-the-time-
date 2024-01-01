import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { todoFacade } from 'src/app/application/Todo.facade';
import { Todo } from 'src/app/modal/todo.modal';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  todoEditForm!: FormGroup;
  todofacade = inject(todoFacade);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      console.log(res);
      const getid: string = res.get('id')!;
      this.todofacade.todolist$.subscribe((val) => {
        const gettododata = val.find((tododata) => tododata.id === +getid);
        console.log(val);

        this.todoEditForm = new FormGroup({
          id: new FormControl(gettododata?.id),
          task: new FormControl(gettododata?.task, Validators.required),
          duration: new FormControl(gettododata?.duration, Validators.required),
        });
      });
    });
  }
  onadd(id: number, value: Todo) {
    console.log(this.todoEditForm.value);
    this.todofacade.updateTodo(id, value);
  }
}
