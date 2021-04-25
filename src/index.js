import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";

const Global = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
}
`;

const theme = {
  colors: {
    primary: "#333333",
    // success: "#28a745",
    // danger: "#dc3545",
    border: "#666666",
    link: "#17a2b8",
    background: "#f8f9fa",
  },
  // fontSize: {
  //   small: {
  //     size: "14px",
  //     lineHeight: "18px",
  //   },
  //   big: {
  //     size: "22px",
  //     lineHeight: "26px",
  //   },
  // },
  pageWidth: "800px",
  borderRadius: "4px",
  borderWidth: "1px",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
