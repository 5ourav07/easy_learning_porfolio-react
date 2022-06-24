import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;