import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigationSlice";
// import channelTalkReducer from "./channelTalkSlice";

// 여러 개의 리듀서를 합쳐 rootReducer로 지정
const rootReducer = {
  navigation: navigationReducer,
  // channelTalk: channelTalkReducer,
  // 추가하는 곳
};

// Redux Toolkit을 사용하여 스토어 생성
const store = configureStore({
  reducer: rootReducer,
});

export default store;
