import {call, put, takeLatest} from 'redux-saga/effects'
import {setTags,  setTagsLoadingState, TagsActionsType} from "./actionCreators";
import {TagsApi} from "../../../services/api/tagsApi";
import {LoadingState} from "./contracts/state";


// Our worker Saga: will perform the async increment task
export function* fetchTagsRequest() {
    try {
        const items = yield call(TagsApi.fetchTags);
        yield put(setTags(items))
    } catch (e) {
        yield put(setTagsLoadingState(LoadingState.ERROR));
    }

}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}