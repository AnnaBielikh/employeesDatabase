import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "./index.style";

import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
