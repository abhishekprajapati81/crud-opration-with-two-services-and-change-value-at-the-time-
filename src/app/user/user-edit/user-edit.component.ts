import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserFacade } from 'src/app/application/user.facade';
import { User } from 'src/app/modal/user.modal';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  editform!: FormGroup;
  userfacade = inject(UserFacade);
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      console.log(res);
      const data: string = res.get('id')!;
      this.userfacade.Userlist$.subscribe((val) => {
        const getUserEditData = val.find((userdata) => userdata.id === +data);
        this.editform = new FormGroup({
          id: new FormControl(getUserEditData?.id),
          name: new FormControl(getUserEditData?.name, Validators.required),
          surname: new FormControl(
            getUserEditData?.surname,
            Validators.required
          ),
        });
      });
    });
  }

  onUpdate(id: number, value: User) {
    this.userfacade.UpdateUsers(id, value);
  }
}
