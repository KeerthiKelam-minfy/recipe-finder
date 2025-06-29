import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Recipe Finder</h1>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
