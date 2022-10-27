import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { asyncShowError, asyncShowSuccess } from "./common";
import { asyncSetLatestTry } from "./user";

export const asyncCreateBasic = createAsyncThunk(
  "basic/create",
  async (_, { dispatch, getState }) => {
    const { deviceId, user, latestTry } = getState().user;
    const body = getState().basic;
    console.log(body, "body");
    const reqObj = {
      path: "/basic_Info",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    };
    const update = latestTry && latestTry.basicInfo;
    if (update) {
      reqObj.path = "/basic_Info/" + latestTry.basicInfo.id;
      reqObj.method = "PUT";
    }

    const res = await callApi(reqObj);
    console.log(res, "basic");
    if (res.success) {
      dispatch(asyncSetLatestTry(res.data));
      dispatch(asyncShowSuccess("Basic info created successfully"));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
