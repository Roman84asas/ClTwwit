import {UserState} from "./contracts/state";
import {Action} from "redux";

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}


export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}
export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: string;
}
export interface AddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet;
}
export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS;
}
export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}
export interface SetAddFormStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState;
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});
export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
});
export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
});
export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
});
export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload,
});
export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS
});

export type TweetsActions =
    SetTweetsActionInterface |
    SetTweetsLoadingStateActionInterface |
    FetchTweetsActionInterface |
    FetchAddTweetActionInterface |
    AddTweetActionInterface |
    SetAddFormStateActionInterface;