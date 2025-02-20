import { configureStore } from "@reduxjs/toolkit";
import toasterReducer from "@store/toaster.slice";
import userReducer from "@store/user.slice";

const store = configureStore({
  reducer: {
    toaster: toasterReducer,
    user: userReducer,
  },
});

export default store;
