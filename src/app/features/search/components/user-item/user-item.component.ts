import {Component, input} from '@angular/core';
import {UserModel} from '@shared/models/user.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  user = input<UserModel>();
}
