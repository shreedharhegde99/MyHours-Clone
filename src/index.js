import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./CustomTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
const MainApp = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Router>
);

root.render(<MainApp />);
