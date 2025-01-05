import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);