import React, {useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './styles/RecipeDetail.css'

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = await res.json();
      if (data.meals) {
        setRecipe(data.meals[0]);
      }
    };
    fetchRecipe();
  }, [recipeId]);

  const getIngredients = (recipe) => {
    let ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      const meas = recipe[`strMeasure${i}`];
      if (ing && ing.trim() !== "") {
        ingredients.push(`${meas} ${ing}`);
      }
    }
    return ingredients;
  };




  if (!recipe) return <p>Loading recipe...</p>;

  return (
    <div className="recipe-detail">
      <Link to="/" className="back-link">
        ← Back to Search
      </Link>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>
        <strong>Category:</strong>
        {recipe.strCategory}
      </p>
      <h3>Ingredients</h3>
      <ul>
        {getIngredients(recipe).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
