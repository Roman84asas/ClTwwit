import {User, UserState} from "./contracts/state";
import {Action} from "redux";

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}


export interface SetUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA;
    payload: User;
}


export type UserActions = SetUserDataActionInterface ;