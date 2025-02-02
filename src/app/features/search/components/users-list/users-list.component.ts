import {Component, inject, input} from '@angular/core';
import {UserModel} from '@shared/models/user.model';
import {UserItemComponent} from '../user-item/user-item.component';
import {select, Store} from '@ngrx/store';
import {selectUsersState} from '@app/features/search/state/users.selectors';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [
    UserItemComponent,
    AsyncPipe
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  private store = inject(Store);
  users$ = this.store.pipe(select(selectUsersState));
}
