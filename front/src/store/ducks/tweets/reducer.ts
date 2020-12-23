import produce, {Draft} from "immer";
import {LoadingState, TweetsState} from "./contracts/state";

const initialTweetState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: any) => {

}, initialTweetState);