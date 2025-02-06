/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { seminarsReducer } from "./seminars/seminarsSlice";

export const store = configureStore({
  reducer: {
    seminarsList: seminarsReducer,
  },
});
