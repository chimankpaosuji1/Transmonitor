import React from "react";
import { DashboardPage } from "./routes/Routes.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
