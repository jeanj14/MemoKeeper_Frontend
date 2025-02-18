import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: null,
  status: null,
};

const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    setMsg: (state, action) => {
      const { msg, status } = action.payload;
      state.msg = msg;
      state.status = status;
    },
    clearMsg: () => {
      return initialState;
    },
  },
});

export const { setMsg, clearMsg } = toasterSlice.actions;

const toasterReducer = toasterSlice.reducer;

export default toasterReducer;
