import {Action} from "redux";
import {User} from "../user/contracts/state";

export enum UsersActionsType {
    SET_ITEMS = 'randomUsers/SET_ITEMS',
    FETCH_ITEMS = 'randomUsers/FETCH_ITEMS',
}

export interface SetUsersItemsActionInterface extends Action<UsersActionsType> {
    type: UsersActionsType.SET_ITEMS;
    payload: User[];
}
export interface FetchUsersItemsActionInterface extends Action<UsersActionsType> {
    type: UsersActionsType.FETCH_ITEMS;
    payload: User[];
}

export const setUsers = (payload: User[]): SetUsersItemsActionInterface => ({
    type: UsersActionsType.SET_ITEMS,
    payload,
});

export type UsersActions = SetUsersItemsActionInterface | FetchUsersItemsActionInterface;