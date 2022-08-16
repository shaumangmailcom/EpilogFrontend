import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { asyncShowError, asyncShowSuccess } from "./common";
import { asyncSetLatestTry } from "./user";

export const asyncCreateWishes = createAsyncThunk(
  "share/create",
  async (_, { dispatch, getState }) => {
    const { deviceId, user } = getState().user;
    const body = getState().wishes;
    console.log(body, "body");
    const res = await callApi({
      path: "/wishes",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    });
    console.log(res, "res");
    if (res.success) {
      dispatch(asyncSetLatestTry(res.data));
      dispatch(asyncShowSuccess("More info created successfully"));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
