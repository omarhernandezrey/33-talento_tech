import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        const data = await response.json();
        setCocktails(data.drinks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCocktails();
  }, []);

  return (
    <div className="cocktail-container">
      {cocktails.map(cocktail => (
        <div key={cocktail.idDrink} className="cocktail-card">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <div className="cocktail-details">
            <h2>{cocktail.strDrink}</h2>
            <p>{cocktail.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
