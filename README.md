"# w14-coding-assignment-react" 
"# w14-coding-assignment-react" 

### *This project was designed, manipulated and completed with the help of AI for the Promineo Tech Week 14 assignment.*

# Assignment Requirements Breakdown
1. App is a static version 
You're not using API calls or dynamic state yet.

You're passing test data down through props.


2. Includes test data
Your test data lives in src/data/recipes.ts.

It's an array of recipe objects with id, name, ingredients, and instructions.


3. Simple mockup UI
You created a visual layout using:

A <Header /> component with an image and text

A <RecipeList /> that lists recipe cards

A <RecipeCard /> for each individual recipe

Bootstrap is used for layout and styling.


 4. At least three components
Header.tsx

RecipeList.tsx

RecipeCard.tsx

Plus your main App.tsx


5. Displays test data
You're importing and rendering data from recipes.ts.


6. Uses at least one prop
RecipeList receives a recipes prop.

RecipeCard receives a recipe prop.

You're using props to display the correct data.


7. No red console errors
As long as everything is typed properly and components are imported correctly, you should see no errors.


8. No TypeScript errors in VS Code
You're using correct types for props and data structure.

Components are correctly typed with React.FC<Props>.

# End Instructions---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
