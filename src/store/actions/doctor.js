import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { setDoctorState, setRepliesReverse } from "../reducers/doctor";
import { asyncShowError, asyncShowSuccess } from "./common";
import { asyncSetLatestTry } from "./user";
// import { asyncSetLatestTry } from "./user";

export const asyncCreateDoctor = createAsyncThunk(
  "doctor/create",
  async (_, { dispatch, getState }) => {
    const { deviceId, user } = getState().user;
    const {
      email1,
      email2,
      epilog_system,
      have_decisions,
      next_treatment_offer,
      sound_familiar,
      replies: rp,
    } = getState().doctor;
    const replies = Object.values(rp)
      .filter((q) => q.answer)
      .map((q) => ({ questionId: q.id, answer: q.answer }));

    const body = {
      email1,
      email2,
      epilog_system,
      have_decisions,
      next_treatment_offer,
      sound_familiar,
      replies,
    };
    console.log(body, "body");

    const res = await callApi({
      path: "/doctor",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    });
    console.log(res, "res");
    if (res.success) {
      dispatch(asyncSetLatestTry(res.data));
      dispatch(asyncShowSuccess("Doctor Conversation created successfully"));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
export const asyncGetQuestions = createAsyncThunk(
  "questions/get",
  async (_, { dispatch, getState }) => {
    const { deviceId, user } = getState().user;
    // const body = getState().share;
    // console.log(body, "body");
    const res = await callApi({
      path: "/user_question",
      method: "GET",
      token: user?.deviceId ?? deviceId,
      //   body,
    });
    console.log(res, "res");
    if (res.success) {
      const { replies, questions } = questionsData(res.data);
      dispatch(setDoctorState({ questions }));
      dispatch(setRepliesReverse(replies));
      dispatch(asyncShowSuccess("questions fetched successfully"));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);

function questionsData(data) {
  let replies = {};
  const questions = data.reduce((acc, val) => {
    let module = acc[val.moduleId] ?? { ...val.module, options: [] };
    module.options.push({ ...val });
    replies[val.id] = { ...val, answer: module.options.length === 1 };
    return { ...acc, [val.moduleId]: module };
  }, {});
  return { replies, questions };
}

export const asyncCreateQuestions = createAsyncThunk(
  "questions/create",
  async (body, { dispatch, getState }) => {
    const { deviceId, user } = getState().user;
    // body
    // {question, moduleId}
    const res = await callApi({
      path: "/user_question",
      method: "POST",
      token: user?.deviceId ?? deviceId,
      body,
    });
    console.log(res, "res");
    if (res.success) {
      const { replies, questions } = questionsData(res.data);
      dispatch(setDoctorState({ questions }));
      dispatch(setRepliesReverse(replies));
      dispatch(asyncShowSuccess("questions fetched successfully"));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
