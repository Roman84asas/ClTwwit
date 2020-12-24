import produce, {Draft} from "immer";
import {LoadingState, TweetsState} from "./contracts/state";
import {TweetsActions, TweetsActionsType} from "./actionCreators";

const initialTweetState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    const {type, payload } = action;

    if (type === TweetsActionsType.SET_TWEETS) {
        draft.items = payload;
    }
}, initialTweetState);