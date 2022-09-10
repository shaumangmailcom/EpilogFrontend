import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { asyncShowError, asyncShowSuccess } from "./common";
import { asyncSetLatestTry } from "./user";

export const asyncCreateShare = createAsyncThunk(
  "share/create",
  async (_, { dispatch, getState }) => {
    const { deviceId, user, latestTry } = getState().user;
    const body = getState().share;
    console.log(body, "body");
    const reqObj = {
      path: "/share",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    };
    const update = latestTry && latestTry.share;
    if (update) {
      reqObj.path = "/share/" + latestTry.share.id;
      reqObj.method = "PUT";
    }
    const res = await callApi(reqObj);
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
