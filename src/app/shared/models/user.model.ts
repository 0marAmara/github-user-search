export interface UserModel {
  id: number;
  avatar_url: string;
  login: string;
  type: string;
  score: number;
  html_url: string;
}

export interface UsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: UserModel[];
}
