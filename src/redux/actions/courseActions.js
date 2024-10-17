import { createAction } from "@reduxjs/toolkit";

export const FETCH_COURSES_REQUEST = createAction('FETCH_COURSES_REQUEST');
export const FETCH_COURSES_SUCCESS = createAction('FETCH_COURSES_SUCCESS');
export const FETCH_COURSES_FAILURE = createAction('FETCH_COURSES_FAILURE');