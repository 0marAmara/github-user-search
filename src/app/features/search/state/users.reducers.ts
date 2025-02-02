import {createReducer, on} from '@ngrx/store';
import {searchFail, searchSuccess, searchUsers} from '@app/features/search/state/users.actions';
import {ResponseState} from '@app/features/search/state/response-state.model';

const initialState: ResponseState = {users: [], error: undefined, isLoading: false};

export const usersReducers = createReducer(
  initialState,
  on(searchUsers, (state, action) => ({...initialState, isLoading: true})),
  on(searchSuccess, (state, action) => ({...initialState, users: action.users})),
  on(searchFail, (state, action) => ({...initialState, error: action.error})),
)
