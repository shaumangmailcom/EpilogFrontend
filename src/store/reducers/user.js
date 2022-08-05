import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deviceId: null,
  user: null,
  latestTry: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setDeviceId: (state, { payload }) => {
      state.deviceId = payload;
    },
    setLatestTry: (state, { payload }) => {
      state.latestTry = payload;
    },
    setUserState: (state, { payload }) => ({ ...state, ...payload }),
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setDeviceId, setUserState } = userSlice.actions;

export default userSlice.reducer;
