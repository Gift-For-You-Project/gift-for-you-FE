import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import channelTalkReducer from "./channelTalkSlice";
import authReducer from "./authSlice"; // { browserClosedLogout }

// 여러 개의 리듀서를 합쳐 rootReducer로 지정
const rootReducer = combineReducers({
  channelTalk: channelTalkReducer,
  auth: authReducer,
});

// Redux Persist의 설정을 담고 있는 객체
const persistConfig = {
  key: "root", // 저장된 데이터의 키
  storage, // 사용할 스토리지 엔진: 웹 브라우저의 로컬 스토리지
};

// Redux Persist를 적용한 최종적인 리듀서
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Toolkit을 사용하여 스토어 생성
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Serializable 체크를 비활성화하여 non-serialization 가능한 값 사용 허용
      // 특별한 상황에서만 사용해야 하며, 주의가 필요한 설정
      serializableCheck: false,
    }),
});

// 브라우저 닫힘 이벤트 리스너 등록
// window.addEventListener("beforeunload", () => {
//   store.dispatch(browserClosedLogout());
// });

// Persisted 스토어와 임시 스토어를 생성
export const persistor = persistStore(store);

export default store;
