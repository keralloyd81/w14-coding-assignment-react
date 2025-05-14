import React from 'react';

// Define the structure of a recipe
type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
};

// Props received by this component
type Props = {
  recipe: Recipe;
};

// This component displays a single recipe
const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h3 className="card-title">{recipe.name}</h3>
        <h5>Ingredients:</h5>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h5>Instructions:</h5>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
