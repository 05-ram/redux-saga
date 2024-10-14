import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../data";

const courseSlice = createSlice(
    {
        name: 'course',
        initialState: courses,
        reducers: {}
    }
)

export default courseSlice.reducer;