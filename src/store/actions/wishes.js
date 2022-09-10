import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { asyncShowError, asyncShowSuccess } from "./common";
import { asyncSetLatestTry } from "./user";

export const asyncCreateWishes = createAsyncThunk(
  "share/create",
  async (_, { dispatch, getState }) => {
    const { deviceId, user, latestTry } = getState().user;
    const body = getState().wishes;
    console.log(body, "body");
    const reqObj = {
      path: "/wishes",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    };
    const update = latestTry && latestTry.wishes;
    if (update) {
      reqObj.path = "/wishes/" + latestTry.wishes.id;
      reqObj.method = "PUT";
    }

    const res = await callApi(reqObj);
    console.log(res, "res");
    if (res.success) {
      dispatch(asyncSetLatestTry(res.data));
      dispatch(asyncShowSuccess("Wishes created successfully"));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
