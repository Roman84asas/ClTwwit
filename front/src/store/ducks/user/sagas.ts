import {call, put, takeLatest} from 'redux-saga/effects'
import {
    FetchSignInDataActionInterface,
    FetchSignUPDataActionInterface,
    setUserData,
    setUserDataLoadingState,
    UserActionsType
} from "./actionCreators";
import {AuthApi} from "../../../services/api/authApi";
import {LoadingState} from "./contracts/state";


export function* fetchSignInRequest({payload}: FetchSignInDataActionInterface) {
    try {
        const {data} = yield call(AuthApi.signIn, payload);
        yield put(setUserData(data));
        window.localStorage.setItem('token', data.token)
    } catch (e) {
        yield put(setUserDataLoadingState(LoadingState.ERROR));
    }
}
export function* fetchSignUpRequest({payload}: FetchSignUPDataActionInterface) {
    try {
        yield put(setUserDataLoadingState(LoadingState.LOADING));

        // @ts-ignore
        yield call(AuthApi.signUp, payload);

        yield put(setUserDataLoadingState(LoadingState.SUCCESS));
    } catch (e) {
        yield put(setUserDataLoadingState(LoadingState.ERROR));
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
}