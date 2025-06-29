import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchRecipes = async () => {
    setIsLoading(true);
    setNotFound(false);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setNotFound(true);
      }
    } catch (error) {
      console.log(`Error fetching resipes:`, error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchRecipes} />
      {isLoading && <p>Searching for Recipes...</p>}
      {notFound && <p>No Recipes found. Try another search.</p>}
      <RecipeList recipes={recipes} />
    </>
  );
}

export default SearchPage;
