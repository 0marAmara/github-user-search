import {Component, inject, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, of, switchMap} from 'rxjs';
import {Store} from '@ngrx/store';
import {searchUsers} from '@app/features/search/state/users.actions';

@Component({
  selector: 'app-search-box',
  imports: [
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit {
  inputControl = new FormControl('');
  private store = inject(Store);

  ngOnInit() {
    this.inputControl.valueChanges.pipe(
      debounceTime(300),
      switchMap((searchTerm) => {
        if (searchTerm && searchTerm.trim() !== '') {
          this.store.dispatch(searchUsers({searchTerm: searchTerm || ''}));
        }
        return of({});
      })
    ).subscribe();
  }
}
