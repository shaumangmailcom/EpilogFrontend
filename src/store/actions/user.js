import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { resetBasic, setBasicInfoState } from "../reducers/basicInfo";
import { resetFeedback, setFeedbackState } from "../reducers/feedback";
import { resetMoreInfo, setMoreInfoState } from "../reducers/moreInfo";
import { resetShare, setShareState } from "../reducers/share";
import { setLatestTry, setUser } from "../reducers/user";
import { resetWishes, setWishesState } from "../reducers/wishes";
import { asyncShowError, asyncShowSuccess } from "./common";
// import { asyncGetQuestions } from "./doctor";

export const asyncCreate_FetchUser = createAsyncThunk(
  "user",
  async (_, { dispatch, getState }) => {
    const { deviceId, user } = getState().user;
    const res = await callApi({
      path: "/user",
      method: "POST",
      // body: { deviceId },
      token: user?.deviceId ?? deviceId,
    });
    console.log(res, "res");
    if (res.success) {
      dispatch(setUser(res.data));
      dispatch(asyncSetLatestTry(res.data.latest_try));
      // dispatch(asyncGetQuestions())
      dispatch(asyncShowSuccess("User created successfully"));
      return res;
    }
    dispatch(asyncShowError(res.message));
    return res;
  }
);
export const asyncSetLatestTry = createAsyncThunk(
  "latestTry",
  async (lastestTry, { dispatch }) => {
    dispatch(setLatestTry(lastestTry));
    const { basicInfo, moreInfo, share, wishes, journey, doctor } =
      lastestTry ?? {};
    dispatch(basicInfo ? setBasicInfoState(basicInfo) : resetBasic());
    dispatch(moreInfo ? setMoreInfoState(moreInfo) : resetMoreInfo());
    dispatch(share ? setShareState(share) : resetShare());
    dispatch(wishes ? setWishesState(wishes) : resetWishes());
    // dispatch(journey ? setFeedbackState(journey) : resetFeedback());
    // if(!doctor){
    //   dispatch( resetDoctor());
    // }
  }
);
