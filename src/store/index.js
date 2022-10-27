import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sampleReducer from "./reducers/sample";
import userReducer from "./reducers/user";
import basicInfoReducer from "./reducers/basicInfo";
import moreInfoReducer from "./reducers/moreInfo";
import shareReducer from "./reducers/share";
import wishesReducer from "./reducers/wishes";
import doctorReducer from "./reducers/doctor";
import feedbackReducer from "./reducers/feedback";
import commonReducer from "./reducers/common";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "epilog",
  storage,
  whitelist: ["feedback"],
};

const allReducers = combineReducers({
  counter: sampleReducer,
  user: userReducer,
  basic: basicInfoReducer,
  more: moreInfoReducer,
  share: shareReducer,
  wishes: wishesReducer,
  doctor: doctorReducer,
  feedback: feedbackReducer,
  common: commonReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
