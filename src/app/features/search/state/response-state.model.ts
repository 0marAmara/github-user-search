import {UserModel} from '@shared/models/user.model';

export interface ResponseState {
  users: UserModel[],
  error?: { message: string },
  isLoading: boolean,
}
