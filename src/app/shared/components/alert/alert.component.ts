import {Component, inject} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectErrorState} from '@app/features/search/state/users.selectors';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [
    AsyncPipe
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  private store = inject(Store);
  error$ = this.store.pipe(select(selectErrorState));
}
