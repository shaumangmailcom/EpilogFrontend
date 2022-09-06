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
  epilog_system: 0,
  want_to_think_large_decision: 0,
  current_page: 0,
  heading: 0,
  add_quetion: 0,
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
  },
});

// Action creators are generated for each case reducer function
export const { setDoctorState, setCurrentPage, resetDoctor } =
  doctorSlice.actions;

export default doctorSlice.reducer;
