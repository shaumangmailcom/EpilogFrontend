import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { asyncShowError, asyncShowSuccess } from "./common";
import { asyncCreate_FetchUser, asyncSetLatestTry } from "./user";

export const asyncCreateFeedback = createAsyncThunk(
  "feedback/create",
  async (_, { dispatch, getState }) => {
    const { deviceId, user } = getState().user;
    const body = getState().feedback;
    console.log(body, "body");
    if(!body.email ){
      return {success : false , message : "Please enter your email"};
    }
    let res = await callApi({
      path: "/journey",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    });
    console.log(res, "journey");
    if (res.success) {
      res = await dispatch(asyncCreate_FetchUser()).unwrap();
      dispatch(asyncSetLatestTry(res.data.latest_try));
      dispatch(asyncShowSuccess("More info created successfully"));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
