import {inject, Injectable} from '@angular/core';
import {GithubService} from '@services/github.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {searchFail, searchSuccess, searchUsers} from '@app/features/search/state/users.actions';
import {catchError, map, of, switchMap} from 'rxjs';

@Injectable()
export class SearchEffects {
  private githubService = inject(GithubService);
  private actions$ = inject(Actions);

  searchUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchUsers),
      switchMap(action => {
          return this.githubService.searchUsers(action.searchTerm).pipe(
            map(users => searchSuccess({users: users})),
            catchError((error) => of(searchFail({error})))
          )
        }
      )
    )
  })
}
