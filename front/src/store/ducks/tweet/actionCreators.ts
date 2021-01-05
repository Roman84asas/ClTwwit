import {LoadingState, TweetState} from "./contracts/state";
import {Action} from "redux";

export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}


export interface SetTweetActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET_DATA;
    payload: TweetState['data'];
}
export interface FetchTweetActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET_DATA;
    payload: string;
}
export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export const setTweetData = (payload: TweetState['data']): SetTweetActionInterface => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload,
});
export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload,
});
export const fetchTweetData = (payload: string): FetchTweetActionInterface => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload
});

export type TweetActions = SetTweetActionInterface | SetTweetLoadingStateActionInterface | FetchTweetActionInterface;