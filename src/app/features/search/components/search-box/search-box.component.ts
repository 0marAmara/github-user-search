import {Component, output} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {debounceTime, of, Subject, switchMap} from 'rxjs';

@Component({
  selector: 'app-search-box',
  imports: [
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  searchForUser = output<string>()
  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(300),
      switchMap(search => {
        if(search.trim().length == 0){
          return of(search);
        }
        this.searchForUser.emit(search)
        return of(search);
      }),
    ).subscribe();
  }

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchSubject.next(inputValue);
  }
}
