import { configureStore } from "@reduxjs/toolkit";
import courseReducer from '../features/course/courseSlice';
import selectedCourseReducer from '../features/course/selectedSlice';
import playlistReducer from "../features/playlist/playlistSlice";
import selectedPlaylistReducer from "../features/playlist/selectedPlay";

export const store = configureStore(
    {
        reducer: {
            course: courseReducer,
            selectedCourse: selectedCourseReducer,
            playlist: playlistReducer,
            selectedPlaylist: selectedPlaylistReducer
        }
    }
)