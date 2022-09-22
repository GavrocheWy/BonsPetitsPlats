// Display all recipes

const recipesSection = document.querySelector('.main-content__display')

// Paramètres de recherche

const displayRecipesParams = {
    ingredients: [],
    appliances: [],
    ustensils: [],
}

const displayRecipes = () => {

    // Vérifier qu'il existe des recettes

    if (typeof recipes !== 'undefined' && recipes.length) {

        // Pour chaque recette :

        recipes.forEach((recipe) => {

            const recipeCard = recipeFactory(recipe);
            const recipeDOM = recipeCard.getRecipeDOM();
            recipesSection.appendChild(recipeDOM);
            currentlyDisplayedRecipes.push(recipe)

        });

    } else {

        console.log('Il n\'y a aucune recette à afficher')

    }

}