import { createSlice } from "@reduxjs/toolkit";

const selectedCourse = createSlice(
    {
        name: 'selectedCourse',
        initialState: {},
        reducers: {
            setSelectedCourse: (state, action) => action.payload
        }
    }
)
export const { setSelectedCourse } = selectedCourse.actions;
export default selectedCourse.reducer;