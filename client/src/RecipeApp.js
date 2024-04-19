import React, { useState, useEffect } from 'react';
import './RecipeApp.css';

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleShowMore = (id) => {
    setRecipes(prevRecipes => {
      return prevRecipes.map(recipe => {
        if (recipe.idMeal === id) {
          return { ...recipe, showMore: !recipe.showMore };
        }
        return recipe;
      });
    });
  };

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    const url = selectedCategory
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          const updatedRecipes = data.meals.map(recipe => {
            return { ...recipe, showMore: false };
          });
          setRecipes(updatedRecipes);
        } else {
          setRecipes([]);
        }
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container">
      <h1>Recipe Finder</h1>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">All Recipes</option>
        {categories.map((category, index) => (
          <option key={index} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
      <div className="recipes-grid">
        {recipes.length > 0 ? recipes.map(recipe => (
          <div key={recipe.idMeal} className="recipe-card">
            <img src={`${recipe.strMealThumb}/preview`} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
            <p>
              {recipe.showMore || !recipe.strInstructions ? 
                recipe.strInstructions :
                `${recipe.strInstructions.substring(0, 100)}...`}
              {recipe.strInstructions && (
                <button onClick={() => toggleShowMore(recipe.idMeal)} className="read-more">
                  {recipe.showMore ? 'Read Less' : 'Read More'}
                </button>
              )}
            </p>
          </div>
        )) : <p className="no-recipes">No recipes found.</p>}
      </div>
    </div>
  );
}

export default RecipeApp;
