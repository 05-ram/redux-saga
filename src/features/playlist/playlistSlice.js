import { createSlice } from "@reduxjs/toolkit";
import { playlists } from "../../data";

const playlistSlice = createSlice(
    {
        name: 'playlist',
        initialState: playlists,
        reducers: {}
    }
)

export default playlistSlice.reducer;   