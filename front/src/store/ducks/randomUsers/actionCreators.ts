import { TagsState} from "./contracts/state";
import {Action} from "redux";

export enum UsersActionsType {
    SET_ITEMS = 'randomUsers/SET_ITEMS',
    FETCH_ITEMS = 'randomUsers/FETCH_ITEMS',
}

export interface SetTagsActionInterface extends Action<UsersActionsType> {
    type: UsersActionsType.SET_ITEMS;
    payload: TagsState['items'];
}


export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
    type: UsersActionsType.SET_ITEMS,
    payload,
});

export type TagsActions = SetTagsActionInterface;