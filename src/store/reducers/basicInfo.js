import { createSlice } from "@reduxjs/toolkit";

export const basicStateKeys = [
  "facing_challenge",
  "age",
  "gender",
  "disease",
  "communication",
];
const initialState = {
  facing_challenge: null,
  age: null,
  gender: null,
  disease: null,
  communication: null,
  current_page: 0,
};

export const basicInfoSlice = createSlice({
  name: "basicInfo",
  initialState,
  reducers: {
    setBasicInfoState: (state, { payload }) => ({ ...state, ...payload }),
    setCurrentPage: (state, { payload }) => {
      state.current_page = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBasicInfoState, setCurrentPage } = basicInfoSlice.actions;

export default basicInfoSlice.reducer;