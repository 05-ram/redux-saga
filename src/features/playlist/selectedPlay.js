import { createSlice } from "@reduxjs/toolkit";

const selectedPlaylist = createSlice({
    name: 'selectedPlaylist',
    initialState: {},
    reducers: {
        setSelectedPlaylist: (state, action) => action.payload
    }
})
export const { setSelectedPlaylist } = selectedPlaylist.actions;
export default selectedPlaylist.reducer;