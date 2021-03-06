import {call, put, takeLatest} from 'redux-saga/effects'
import {
    addTweet,
    FetchAddTweetActionInterface, setAddFormState,
    setTweets,
    setTweetsLoadingState,
    TweetsActionsType
} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState} from "./contracts/state";


export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items))
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }

}
export function* fetchAddTweetRequest({payload: text}: FetchAddTweetActionInterface) {
    try {
        const item = yield call(TweetsApi.addTweet, text);
        yield put(addTweet(item))
    } catch (e) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}