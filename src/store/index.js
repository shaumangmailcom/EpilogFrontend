import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./reducers/sample";
import userReducer from "./reducers/user";
import basicInfoReducer from "./reducers/basicInfo";
import moreInfoReducer from "./reducers/moreInfo";
import shareReducer from "./reducers/share";
import wishesReducer from "./reducers/wishes";
import feedbackReducer from "./reducers/feedback";
import commonReducer from "./reducers/common";

export const store = configureStore({
  reducer: {
    counter: sampleReducer,
    user: userReducer,
    basic: basicInfoReducer,
    more: moreInfoReducer,
    share: shareReducer,
    wishes: wishesReducer,
    feedback: feedbackReducer,
    common: commonReducer,
  },
});
