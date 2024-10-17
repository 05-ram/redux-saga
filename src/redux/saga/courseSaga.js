import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_COURSES_FAILURE, FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS } from "../actions/courseActions";

const fetchCourses = async () => {
    const res = await fetch('https://282d1380-70fe-47d4-ae32-0d810977014e.mock.pstmn.io/courses');
    const data = await res.json();
    return data?.courses ?? [];
}

// worker saga
function* fetchCoursesSaga() {
    try {
        const data = yield call(fetchCourses)
        yield put(FETCH_COURSES_SUCCESS(data))
    }
    catch (error) {
        yield put(FETCH_COURSES_FAILURE(error))
    }
}

export function* watchFetchCourses() {
    yield takeEvery(FETCH_COURSES_REQUEST, fetchCoursesSaga);
}