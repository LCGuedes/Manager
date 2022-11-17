import { combineReducers } from "@reduxjs/toolkit";
import defaultReducer from "./defaultReducer";

const rootReducer = combineReducers({
  defaultReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
