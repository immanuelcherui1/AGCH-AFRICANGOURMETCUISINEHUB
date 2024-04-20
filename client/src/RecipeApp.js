import React, { useState, useEffect } from 'react';
import './RecipeApp.css';

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]); // State to store the list of countries
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(''); // State to store the selected country

  // Function to toggle the showMore state of a recipe
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

  // Fetch categories and countries on component mount
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching categories:', error));

// Fetch countries
fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  .then(response => response.json())
  .then(data => setCountries(data.meals))
  .catch(error => console.error('Error fetching countries:', error));
  }, []);

  // Fetch recipes when the selected category or country changes
  useEffect(() => {
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    if (selectedCategory) {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
    } else if (selectedCountry) {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`;
    }

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
  }, [selectedCategory, selectedCountry]);

  // Event handler for category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedCountry(''); // Reset selected country when category changes
  };

  // Event handler for country selection
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCategory(''); // Reset selected category when country changes
  };

  return (
    <div className="container">
      <h1>Recipe Finder</h1>
      <div>
        <label htmlFor="category"></label>
        <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="country"></label>
        <select id="country" onChange={handleCountryChange} value={selectedCountry}>
          <option value="">All Countries</option>
          {countries.map((country, index) => (
            <option key={index} value={country.strArea}>
              {country.strArea}
            </option>
          ))}
        </select>
      </div>
      <div className="recipes-grid">
        {recipes.length > 0 ? recipes.map(recipe => (
          <div key={recipe.idMeal} className="recipe-card">
            <img src={`${recipe.strMealThumb}/preview`} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
            <p>
              {recipe.showMore || !recipe.strInstructions || recipe.strInstructions.length <= 100 ? 
                recipe.strInstructions :
                `${recipe.strInstructions.substring(0, 100)}...`}
              {recipe.strInstructions && recipe.strInstructions.length > 100 && (
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

