import { configureStore } from "@reduxjs/toolkit";
import channelTalkReducer from "./channelTalkSlice";
import authSlice from "./authSlice";

// 여러 개의 리듀서를 합쳐 rootReducer로 지정
const rootReducer = {
  channelTalk: channelTalkReducer,
  auth: authSlice,
  // 추가하는 곳
};

// Redux Toolkit을 사용하여 스토어 생성
const store = configureStore({
  reducer: rootReducer,
});

export default store;
