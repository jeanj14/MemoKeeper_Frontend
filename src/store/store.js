import { configureStore } from "@reduxjs/toolkit";
import toasterReducer from "@store/toaster.slice";

const store = configureStore({
  reducer: {
    toaster: toasterReducer,
  },
});

export default store;
