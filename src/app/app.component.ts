import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {SearchBoxComponent} from '@app/features/search/components/search-box/search-box.component';
import {UsersListComponent} from '@app/features/search/components/users-list/users-list.component';
import {LoadingSpinnerComponent} from '@components/loading-spinner/loading-spinner.component';
import {Store} from '@ngrx/store';
import {AlertComponent} from '@components/alert/alert.component';

@Component({
  selector: 'app-root',
  imports: [
    SearchBoxComponent,
    UsersListComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private store = inject(Store);


  ngOnInit() {

  }

  ngOnDestroy() {
  }

}
