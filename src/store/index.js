import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import rankReducer from "./ranking";
import singerReducer from "./singer";

const store = configureStore({
  reducer: combineReducers({
    rankReducer,
    singerReducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
