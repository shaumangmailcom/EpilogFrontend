import { createSlice } from "@reduxjs/toolkit";

export const doctorStateKeys = [
  {
    epilog_system: "epilog_system",
    want_to_think_large_decision: "want_to_think_large_decision",
  },
  {
    heading: "heading",
  },
  // {
  //   add_quetion: "add_quetion",
  // },
];

export const modulesDefault = {
  1: 3,
  2: 2,
  3: 4,
  4: 6,
  5: 4,
};

export const stepRoutes = [
  "/doctor",
  "/pre-appointment",
  "/appointment-questions",
  "/prepare",
  "/reviewing",
  "/manage-conversation",
  "/treatment",
  "/preparation-kit",
];

const initialState = {
  sound_familiar: 0,
  epilog_system: null,
  next_treatment_offer: 0,
  have_decisions: null,
  email1: null,
  email2: null,
  // user questions get from backend
  questions: {},
  replies: {},
  current_page: 0,
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    resetDoctor: () => initialState,
    setDoctorState: (state, { payload }) => ({ ...state, ...payload }),
    setCurrentPage: (state, { payload }) => {
      state.current_page = payload;
    },
    setReplies: (state, { payload }) => {
      state.replies = { ...state.replies, ...payload };
    },
    setRepliesReverse: (state, { payload }) => {
      state.replies = { ...payload, ...state.replies };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDoctorState,
  setCurrentPage,
  resetDoctor,
  setReplies,
  setRepliesReverse,
} = doctorSlice.actions;

export default doctorSlice.reducer;
