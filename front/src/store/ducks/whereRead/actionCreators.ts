import {LoadingState, TagsState} from "./contracts/state";
import {Action} from "redux";

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS;
    payload: TagsState['items'];
}


export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
    type: TagsActionsType.SET_TAGS,
    payload,
});

export type TagsActions = SetTagsActionInterface;