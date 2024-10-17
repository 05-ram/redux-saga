import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { playlists } from "../../data";
import { FETCH_PLAYLIST_FAILURE, FETCH_PLAYLIST_REQUEST, FETCH_PLAYLIST_SUCCESS } from "../../redux/actions/playlistActions";

export const fetchPlaylists = createAsyncThunk('playlist/get', async () => {
    const res = await fetch('https://282d1380-70fe-47d4-ae32-0d810977014e.mock.pstmn.io/playlists')
    const data = await res.json();
    return data?.playlists[0] ?? [];
})

const playlistSlice = createSlice(
    {
        name: 'playlist',
        initialState: {
            data: [],
            isLoading: false,
            error: null
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(FETCH_PLAYLIST_REQUEST, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(FETCH_PLAYLIST_SUCCESS, (state, action) => {
                    state.data = action.payload;
                    state.error = null;
                    state.isLoading = false;
                })
                .addCase(FETCH_PLAYLIST_FAILURE, (state, action) => {
                    state.isLoading = false;
                    state.error = action.error.message;
                })
        }
    }
)

export default playlistSlice.reducer;   