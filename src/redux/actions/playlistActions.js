import { createAction } from "@reduxjs/toolkit";

export const FETCH_PLAYLIST_REQUEST = createAction('FETCH_PLAYLIST_REQUEST');
export const FETCH_PLAYLIST_SUCCESS = createAction('FETCH_PLAYLIST_SUCCESS');
export const FETCH_PLAYLIST_FAILURE = createAction('FETCH_PLAYLIST_FAILURE');