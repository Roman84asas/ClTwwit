import { all } from 'redux-saga/effects'
import {tweetsSaga} from "./tweets/sagas";

export default function* rootSaga() {
    yield all([
        tweetsSaga()
    ])
}