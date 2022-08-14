import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  success: null,
};

export const commonSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setSuccess: (state, { payload }) => {
      state.success = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setError, setSuccess, setLoading } = commonSlice.actions;

export default commonSlice.reducer;
