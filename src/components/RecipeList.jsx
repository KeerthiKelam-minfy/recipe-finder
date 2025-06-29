import React from "react";
import { Link } from "react-router-dom";
import "./styles/RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Link
          key={recipe.idMeal}
          to={`/recipe/${recipe.idMeal}`}
          className="recipe-card"
        >
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
