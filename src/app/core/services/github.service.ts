import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {UserModel, UsersResponse} from '@shared/models/user.model';
import {BehaviorSubject, catchError, map, Observable, of, tap} from 'rxjs';
import {ResponseState} from '@app/features/search/state/response-state.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://api.github.com';

  searchUsers(searchTerm: string) {
    return this.http.get<UsersResponse>(`${this.apiUrl}/search/users?q=${searchTerm}`).pipe(
      map(response => response.items),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      throw new Error('Unauthorized');
    }
    if (error.status === 403) {
      throw new Error('Access denied please try again later');
    } else {
      throw new Error('An error occurred while trying to retrieve users');
    }
  }
}
