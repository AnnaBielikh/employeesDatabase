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

  body{
    background-color: #f7f7f6;
  }
}
`;

const theme = {
  colors: {
    primary: "#333333",
    secondary: "#9FEDD7",
    info: "#FCE181",
    danger: "#dc3545",
    border: "#026670",
    link: "#FEF9C7",
    background: "#FFFFFF",
  },
  fontSize: {
    small: {
      size: "13px",
      lineHeight: "15px",
    },
    big: {
      size: "22px",
      lineHeight: "28px",
    },
  },
  boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
  pageWidth: "750px",
  borderRadius: "8px",
  borderWidth: "1px",
  media: {
    tablet: "(max-width: 768px)",
  },
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
