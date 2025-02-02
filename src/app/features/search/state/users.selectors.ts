import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ResponseState} from '@app/features/search/state/response-state.model';

export const selectResponseState = createFeatureSelector<ResponseState>('response');

export const selectUsersState = createSelector(
  selectResponseState,
  (state: ResponseState) => state.users,
);
export const selectIsLoadingState = createSelector(
  selectResponseState,
  (state: ResponseState) => state.isLoading
);
export const selectErrorState = createSelector(
  selectResponseState,
  (state: ResponseState) => state.error
);
