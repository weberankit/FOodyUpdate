//default import
import CartReducer from "./UseCartSlice";
import { configureStore } from "@reduxjs/toolkit";
const myAppStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default myAppStore;
