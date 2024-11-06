import { EUserRole } from '../enums';


export interface UserReducer {
    currentUser: UserMain
}

export interface UserMain {
    id: string,
    email: string,
    name: string,
    role: EUserRole,
    isEmailVerified: boolean,
}