import { all } from "redux-saga/effects";
import { watchFetchCourses } from "./courseSaga"
import { watchFetchPlaylist } from "./playlistSaga";

const rootSaga = function* () {
    yield all([watchFetchCourses(), watchFetchPlaylist()])
}
export default rootSaga;