import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Home />
      </div>
    </>
  );
};

export default App;
