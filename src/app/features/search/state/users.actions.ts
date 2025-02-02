import {createAction, props} from '@ngrx/store';
import {UserModel} from '@shared/models/user.model';

export const searchUsers = createAction(
  '[Users] Search Users',
  props<{searchTerm:string}>()
);

export const searchSuccess = createAction(
  '[Users] Search Success',
  props<{users:UserModel[]}>()
)

export const searchFail = createAction(
  '[Users] Search Fail',
  props<{error:{message:string}}>()
)
