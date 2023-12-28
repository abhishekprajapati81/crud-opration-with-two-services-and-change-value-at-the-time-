import { Component, OnInit, inject } from '@angular/core';
import { UserFacade } from 'src/app/application/user.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userFacade = inject(UserFacade);

  ngOnInit(): void {
    this.userFacade.getAllUserData();
  }

  onuserdelete(id: number) {
    this.userFacade.deleteUser(id);
    console.log('data delete');
  }
}
