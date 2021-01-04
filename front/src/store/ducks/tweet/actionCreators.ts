import {LoadingState } from "./contracts/state";
import {Action} from "redux";
import {Tweet} from "../tweets/contracts/state";

export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}


export interface SetTweetActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET_DATA;
    payload: Tweet;
}
export interface FetchTweetActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET_DATA;
}
export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}


export const setTweeData = (payload: Tweet): SetTweetActionInterface => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload,
});
export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload,
});
export const fetchTweet = (): FetchTweetActionInterface => ({
    type: TweetActionsType.FETCH_TWEET_DATA
});

export type TweetActions = SetTweetActionInterface | SetTweetLoadingStateActionInterface | FetchTweetActionInterface;