import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { asyncShowError, asyncShowSuccess } from "./common";
import { asyncSetLatestTry } from "./user";

export const asyncCreateBasic = createAsyncThunk(
  "basic/create",
  async (_, { dispatch, getState }) => {
    const { deviceId, user } = getState().user;
    const body = getState().basic;
    console.log(body, "body");
    const res = await callApi({
      path: "/basic_Info",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    });
    console.log(res, "res");
    if (res.success) {
      dispatch(asyncSetLatestTry(res.data));
      dispatch(asyncShowSuccess('Basic info created successfully'));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
