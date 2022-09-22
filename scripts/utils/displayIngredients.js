// Get all uniques ingredients

function getAllUniquesIngredients() {

    // Récupération initiale de tous les appareils

    currentlyDisplayedRecipes.forEach(recipe => {

        const ingredientsOfThisRecipe = recipe.ingredients

        ingredientsOfThisRecipe.forEach(ingredient => {

            const formatedIngredientName = ingredient.ingredient.toLowerCase().replace('.', '')

            const isThisIngredientAlreadyInArray = currentlyDisplayedIngredients.find(ingredient => ingredient === formatedIngredientName)

            // Rechercher l'ingredient dans le tableau

            if (!isThisIngredientAlreadyInArray) {
                currentlyDisplayedIngredients.push(formatedIngredientName)
            }

        });

    });

    console.log('Voici le tableau des ingrédients :', currentlyDisplayedIngredients)

}

function updateIngredients() {

    function getParamsByRecipesDisplayed() {

    }

    function getParamsByTags() {
        
    }

}