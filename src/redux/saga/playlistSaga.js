import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS } from "../actions/courseActions";
import { FETCH_PLAYLIST_FAILURE, FETCH_PLAYLIST_REQUEST, FETCH_PLAYLIST_SUCCESS } from "../actions/playlistActions";

const fetchPlaylists = async () => {
    const res = await fetch('https://282d1380-70fe-47d4-ae32-0d810977014e.mock.pstmn.io/playlists')
    const data = await res.json();
    return data?.playlists[0] ?? []
}

//worker saga
function* fetchPlaylistSaga() {
    try {
        const data = yield call(fetchPlaylists)
        yield put(FETCH_PLAYLIST_SUCCESS(data))
    }
    catch (error) {
        yield put(FETCH_PLAYLIST_FAILURE(error))
    }
}

//watcher saga
export function* watchFetchPlaylist() {
    yield takeEvery(FETCH_PLAYLIST_REQUEST, fetchPlaylistSaga);
}