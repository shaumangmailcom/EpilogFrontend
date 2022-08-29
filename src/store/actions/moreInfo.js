import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { asyncShowError, asyncShowSuccess } from "./common";
import { asyncSetLatestTry } from "./user";

export const asyncCreateMoreInfo = createAsyncThunk(
  "more/create",
  async (_, { dispatch, getState }) => {
    const { deviceId, user, latestTry } = getState().user;
    const body = getState().more;
    console.log(body, "body");
    const reqObj = {
      path: "/more_Info",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    };
    const update = latestTry && latestTry.moreInfo;
    if (update) {
      reqObj.path = "/more_Info/" + latestTry.moreInfo.id;
      reqObj.method = "PUT";
    }
    const res = await callApi(reqObj);
    // console.log(res, "res");
    if (res.success) {
      dispatch(asyncSetLatestTry(res.data));
      dispatch(asyncShowSuccess("More info created successfully"));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
