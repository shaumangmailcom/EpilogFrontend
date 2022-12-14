import { createSlice } from "@reduxjs/toolkit";

export const shareStateKeys = [
  {
    family: "family",
    friends: "friends",
    co_workers: "co_workers",
  },
  {
    usual_feeling: "usual_feeling",
  },
  {
    disease_advances: "disease_advances",
    illness_impact: "illness_impact",
  },
  {
    personal_info: "personal_info",
  },
  {
    feel_pain: "feel_pain",

    // empathize_your_pain: "empathize_your_pain",
    illness: "illness",
    illness_treatment: "illness_treatment",
  },
  {
    good_times_attention: "good_times_attention",
    general_attention: "general_attention",
  },
];
const initialState = {
  family: 0,
  friends: 0,
  co_workers: 0,
  usual_feeling: 0,
  disease_advances: 0,
  illness_impact: 0,
  personal_info: null,
  feel_pain: 0,
  // empathize_your_pain: 0,
  illness: 0,
  illness_treatment: 0,
  good_times_attention: 0,
  general_attention: 0,
  complex_situation: 0,
  shairing_preferences: 0,
  face_to_face: 0,
  family_digitally: 0,
  sharing_recommendations: 0,
  captured: 0,

  // new properties for complex situation
  understand_sharing_preferences: 0,
  confident_in_sharing_preferences: 0,
  face_to_face_situation: 0,
  friends_family_digitally: 0,
  system_sharing_recommendations: 0,
  capture_sharing_preferences: 0,

  current_page: 0,
};

export const shareSlice = createSlice({
  name: "share",
  initialState,
  reducers: {
    resetShare: () => initialState,
    setShareState: (state, { payload }) => ({ ...state, ...payload }),
    setCurrentPage: (state, { payload }) => {
      state.current_page = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShareState, setCurrentPage, resetShare } = shareSlice.actions;

export default shareSlice.reducer;
