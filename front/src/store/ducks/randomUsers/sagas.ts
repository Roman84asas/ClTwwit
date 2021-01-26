import {call, put, takeLatest} from 'redux-saga/effects'
import {TagsApi} from "../../../services/api/tagsApi";
import {LoadingState} from "./contracts/state";
import {setUsers} from "./actionCreators";


export function* fetchUsersRequest() {
    /*try {
        const items = yield call(TagsApi.fetchTags);
        yield put(setUsers(items))
    } catch (e) {
        yield put(setTagsLoadingState(LoadingState.ERROR));
    }*/
}

export function* tagsSaga() {
    //yield takeLatest(TagsActionsType.FETCH_TAGS, fetchUsersRequest)
}