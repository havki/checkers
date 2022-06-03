import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./reducers/main/main.reducer";

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer
  }
})