import {Component, input} from '@angular/core';
import {UserModel} from '@shared/models/user.model';
import {UserItemComponent} from '../user-item/user-item.component';

@Component({
  selector: 'app-users-list',
  imports: [
    UserItemComponent
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users=input<UserModel[]>();
}
