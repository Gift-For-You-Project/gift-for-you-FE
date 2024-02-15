import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <>
    {/* Redux 스토어를 애플리케이션에 제공하기 위해 Provider 사용 */}
    <Provider store={store}>
      {/* Redux Persist 통합을 위한 PersistGate 사용 */}
      <PersistGate loading={null} persistor={persistor}>
        {/* 스타일드 컴포넌트의 테마 및 글로벌 스타일 적용 */}
        <ThemeProvider theme={theme}>
          {/* shouldForwardProp을 통해 모든 프롭을 전달하도록 StyleSheetManager 설정 */}
          <StyleSheetManager shouldForwardProp={() => true}>
            <ToastContainer />
            <GlobalStyle />
            <App />
          </StyleSheetManager>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
  // </React.StrictMode>
);

reportWebVitals();
