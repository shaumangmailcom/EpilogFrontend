import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deviceId: null,
  user: null,
  latestTry: null,
  isLoaded: false,
  // {
  //   basicInfo: {},
  //   moreInfo: {},
  //   share: null,
  //   wishes: null,
  //   journey: null,
  // },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isLoaded = true;
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
export const { setUser, setDeviceId, setLatestTry, setUserState } =
  userSlice.actions;

export default userSlice.reducer;
