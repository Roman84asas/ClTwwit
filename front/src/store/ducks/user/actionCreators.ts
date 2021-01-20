import {LoadingState, User, UserState} from "./contracts/state";
import {Action} from "redux";


export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}


export interface SetUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA;
    payload: User;
}
export interface SetUserLoadingStateActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
});
export const setUserDataLoadingState = (payload: LoadingState): SetUserLoadingStateActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
});

export type UserActions = SetUserDataActionInterface | SetUserLoadingStateActionInterface;