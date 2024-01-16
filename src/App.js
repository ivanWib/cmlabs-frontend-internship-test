import "./App.css";
import React from "react";
// import { Route, Switch } from 'react-router-dom'
// import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import MealsDetailPage from "./pages/MealsDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/details/:category" element={<CategoryDetailPage />} />
        <Route path="/meals/:id" element={<MealsDetailPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
