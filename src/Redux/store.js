import { configureStore } from "@reduxjs/toolkit";
import habitSlice from "./habitSlice";

const store = configureStore({
  reducer: {
    habits: habitSlice,
  },
});
export default store;
