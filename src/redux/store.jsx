import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigationSlice";

// Redux Toolkit을 사용하여 스토어 생성
const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default store;
