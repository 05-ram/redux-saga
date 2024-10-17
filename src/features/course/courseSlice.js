import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FETCH_COURSES_FAILURE, FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS } from "../../redux/actions/courseActions";

export const fetchCourses = createAsyncThunk('course/get', async () => {
    const res = await fetch('https://282d1380-70fe-47d4-ae32-0d810977014e.mock.pstmn.io/courses')
    const data = await res.json();
    return data?.courses ?? [];
})

const courseSlice = createSlice(
    {
        name: 'course',
        initialState: {
            data: [],
            isLoading: false,
            error: null
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(FETCH_COURSES_REQUEST, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(FETCH_COURSES_SUCCESS, (state, action) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.error = null;
                })
                .addCase(FETCH_COURSES_FAILURE, (state, action) => {
                    state.isLoading = false;
                    state.error = action.error.message;
                })

        }
    }
)

export default courseSlice.reducer;