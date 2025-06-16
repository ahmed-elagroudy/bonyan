import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
