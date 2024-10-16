import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
                .addCase(fetchCourses.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(fetchCourses.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.error = null;
                })
                .addCase(fetchCourses.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.error.message;
                })

        }
    }
)

export default courseSlice.reducer;