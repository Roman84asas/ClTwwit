import {call, put, takeLatest} from 'redux-saga/effects'
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, Tweet} from "../tweets/contracts/state";
import {FetchTweetActionInterface, setTweetData, setTweetLoadingState, TweetActionsType} from "./actionCreators";


export function* fetchTweetRequest({payload: tweetId}: FetchTweetActionInterface) {
    try {
        const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data[0]))
    } catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}