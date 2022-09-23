// Display all recipes

const recipesSection = document.querySelector('.main-content__display')

const displayRecipes = () => {

    // AUCUN TAG + AUCUNE RECHERCHE

    allRecipes.forEach(recipe => {

        const recipeCard = recipeFactory(recipe);
        const recipeDOM = recipeCard.getRecipeDOM();
        recipesSection.appendChild(recipeDOM);
        currentlyDisplayedRecipes.push(recipe)
        
    });

}