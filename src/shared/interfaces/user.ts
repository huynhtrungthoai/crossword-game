export interface UserReducer {
  currentUser: UserMain;
}

export interface UserMain {
  id: string;
  email: string;
  name: string;
  role: string;
  isEmailVerified: boolean;
}
