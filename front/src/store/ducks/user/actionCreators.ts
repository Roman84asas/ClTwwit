import {LoadingState, User, UserState} from "./contracts/state";
import {Action} from "redux";
import {LoginFormProps} from "../../../pages/Signin/components/LoginModal";
import {RegisterFormProps} from "../../../pages/Signin/components/RegisterModal";


export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}


export interface SetUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA;
    payload: User | undefined;
}
export interface FetchSignInDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN;
    payload: LoginFormProps;
}
export interface FetchSignUPDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP;
    payload: LoginFormProps;
}
export interface SetUserLoadingStateActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
});
export const fetchSignIn = (payload: LoginFormProps): FetchSignInDataActionInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload,
});
export const fetchSignUp = (payload: RegisterFormProps): FetchSignUPDataActionInterface => ({
    type: UserActionsType.FETCH_SIGN_UP,
    payload,
});
export const setUserDataLoadingState = (payload: UserState['status']): SetUserLoadingStateActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
});

export type UserActions = SetUserDataActionInterface | SetUserLoadingStateActionInterface | FetchSignInDataActionInterface | FetchSignUPDataActionInterface;