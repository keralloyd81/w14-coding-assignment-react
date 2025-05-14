import React from 'react';
import RecipeCard from './RecipeCard'; // ✅ Import the new component

type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
};

type Props = {
  recipes: Recipe[];
};

const RecipeList: React.FC<Props> = ({ recipes }) => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Mama K's Recipes</h2>
      {/* Loop through recipes and render a RecipeCard for each */}
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
