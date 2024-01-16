import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import MealsDetailPage from "./pages/MealsDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  useEffect(() => {
    document.title = "mealapp";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/category/:category" element={<CategoryDetailPage />} />
        <Route path="/meal/:id" element={<MealsDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
