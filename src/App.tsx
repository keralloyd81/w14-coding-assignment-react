//import React from 'react';  --removed due to TS error
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import recipes from './data/recipes';

// Main app component that brings everything together
function App() {
  return (
    <div className="app-container">
      <Header /> {/* Header with background image */}
      <RecipeList recipes={recipes} /> {/* List of test recipes */}
    </div>
  );
}

export default App;
