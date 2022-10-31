import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { setShowModal2 } from "../reducers/feedback";
import { asyncShowError, asyncShowSuccess } from "./common";
import { asyncCreate_FetchUser, asyncSetLatestTry } from "./user";

export const asyncCreateFeedback = createAsyncThunk(
  "feedback/create",
  async (data, { dispatch, getState }) => {
    const { deviceId, user } = getState().user;
    let body = getState().feedback;
    body = { ...body, ...data };
    console.log(body, "body");
    // if (!body.email && data.want_amazon_gift) {
    //   return {
    //     success: false,
    //     message: "Please enter your email",
    //     custom: true,
    //   };
    // }
    let res = await callApi({
      path: "/journey",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    });
    console.log(res, "journey");
    if (res.success) {
      dispatch(asyncShowSuccess("More info created successfully"));
      if (!data.want_amazon_gift)
        await dispatch(asyncCreate_FetchUser()).unwrap();
      // else dispatch(setShowModal2(true));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
