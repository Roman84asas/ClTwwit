import {call, put, takeLatest} from 'redux-saga/effects'
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, Tweet} from "../tweets/contracts/state";
import {FetchTweetActionInterface, setTweetData, setTweetLoadingState, TweetActionsType} from "./actionCreators";


// Our worker Saga: will perform the async increment task
export function* fetchTweetRequest({payload: tweetId}: FetchTweetActionInterface) {
    try {
        const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data[0]))
    } catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }

}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}