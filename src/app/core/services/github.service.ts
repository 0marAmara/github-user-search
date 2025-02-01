import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '@shared/models/user.model';
import {BehaviorSubject, catchError, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://api.github.com';
  private loadingSubject = new BehaviorSubject<boolean>(false);

  searchUsers(searchTerm: string) {
    this.loadingSubject.next(true);
    return this.http.get<{ items: UserModel[] }>(`${this.apiUrl}/search/users?q=${searchTerm}`).pipe(tap(()=>{
      this.loadingSubject.next(false);
    }),catchError((err)=>{
      this.loadingSubject.next(false)
      throw(err);
    }));
  }

  get isLoading(){
    return this.loadingSubject.asObservable();
  }
}
