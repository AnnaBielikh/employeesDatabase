import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
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
    secondary: "#FF8C00",
    success: "#28a745",
    danger: "#dc3545",
    border: "#666666",
    link: "#17a2b8",
    background: "#eeeeee",
  },
  fontSize: {
    small: {
      size: "13px",
      lineHeight: "15px",
    },
    big: {
      size: "22px",
      lineHeight: "26px",
    },
  },
  boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
  pageWidth: "800px",
  borderRadius: "8px",
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
