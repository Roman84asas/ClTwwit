import { takeEvery } from 'redux-saga/effects'
import {TweetsActionsType} from "./actionCreators";



// Our worker Saga: will perform the async increment task
export function* fetchTweetsRequest() {
    yield console.log('test')
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}