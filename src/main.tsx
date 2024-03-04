import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Router from "./routes/Router";
import "../app/globals.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);