import React from "react";
import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";

export default function App(){
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  )
}