import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserFacade } from 'src/app/application/user.facade';
import { Location } from '@angular/common';
import { User } from 'src/app/modal/user.modal';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  userFacade = inject(UserFacade);
  constructor(private loction: Location) {}
  UserForm!: FormGroup;
  ngOnInit(): void {
    this.UserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
    });
  }

  onAdd(user: User) {
    console.log(this.UserForm.value);
    this.userFacade.addNewUserData(user);
    this.loction.back();
  }
}
