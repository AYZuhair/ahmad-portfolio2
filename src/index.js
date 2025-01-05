import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

// Use createRoot instead of ReactDOM.render
const container = document.getElementById("root");
const root = createRoot(container); // Create a root

root.render(
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);