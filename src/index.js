import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyleSheetManager shouldForwardProp={() => true}>
          <GlobalStyle />
          <App />
        </StyleSheetManager>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
