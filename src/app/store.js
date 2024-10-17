import { configureStore } from "@reduxjs/toolkit";
import courseReducer from '../features/course/courseSlice';
import selectedCourseReducer from '../features/course/selectedSlice';
import playlistReducer from "../features/playlist/playlistSlice";
import selectedPlaylistReducer from "../features/playlist/selectedPlay";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/saga/rootSaga";


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = configureStore(
    {
        reducer: {
            course: courseReducer,
            selectedCourse: selectedCourseReducer,
            playlist: playlistReducer,
            selectedPlaylist: selectedPlaylistReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
    }
)

sagaMiddleware.run(rootSaga);

export default store;