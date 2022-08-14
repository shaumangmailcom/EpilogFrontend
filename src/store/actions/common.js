import { createAsyncThunk } from "@reduxjs/toolkit";
import { setError, setSuccess } from "../reducers/common";

export const asyncShowError = createAsyncThunk(
  "error",
  async (msg, { dispatch }) => {
    dispatch(setError(msg));
    setTimeout(() => {
      dispatch(setError(null));
    }, 3000);
  }
);
export const asyncShowSuccess = createAsyncThunk(
  "success",
  async (msg, { dispatch }) => {
    dispatch(setSuccess(msg));
    setTimeout(() => {
      dispatch(setSuccess(null));
    }, 3000);
  }
);
