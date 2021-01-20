export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}
export interface User {
    _id?: string;
    email: string;
    fullname: string;
    username: string;
    password: string;
    confirmed?: boolean;
    confirmHash: string;
    location?: string;
    about?: string;
    website?: string
}

export interface UserState {
    data: User | undefined;
    status: LoadingState;
}
