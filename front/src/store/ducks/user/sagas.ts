import {call, put, takeLatest} from 'redux-saga/effects'
import {FetchSignInDataActionInterface, UserActionsType} from "./actionCreators";
import {AuthApi} from "../../../services/api/authApi";
import {setTweets} from "../tweets/actionCreators";
import {LoadingState} from "./contracts/state";
import {selectUserStatus} from "./selectors";


export function* fetchSignInRequest({payload}: FetchSignInDataActionInterface) {
    try {
        const items = yield call(AuthApi.signIn, payload);
        yield put(setTweets(items))
    } catch (e) {
        yield put(selectUserStatus(LoadingState.ERROR));
    }

}

export function* tweetsSaga() {
    yield takeLatest(UserActionsType.FETCH_TWEETS, fetchSignInRequest);
}