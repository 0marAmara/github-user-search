import {Component, inject} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectIsLoadingState} from '@app/features/search/state/users.selectors';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  imports: [
    AsyncPipe
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
  private store = inject(Store);
  loading$ = this.store.pipe(select(selectIsLoadingState));
}
