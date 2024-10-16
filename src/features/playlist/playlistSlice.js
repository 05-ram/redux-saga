import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { playlists } from "../../data";

export const fetchPlaylists = createAsyncThunk('playlist/get', async () => {
    const res = await fetch('https://282d1380-70fe-47d4-ae32-0d810977014e.mock.pstmn.io/playlists')
    const data = await res.json();
    return data?.playlists ?? [];
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
                .addCase(fetchPlaylists.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(fetchPlaylists.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.error = null;
                    state.isLoading = false;
                })
                .addCase(fetchPlaylists.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.error.message;
                })
        }
    }
)

export default playlistSlice.reducer;   