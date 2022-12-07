// Display all recipes

const recipesSection = document.querySelector('.main-content__display')

const displayRecipes = () => {

    // TAGS + SEARCH OBLIGATOIRE

    if ((!Object.values(displayedTagsParams).every((array) => array.length === 0)) && (currentSearch !== null)) {

        console.log('Recherche par tag + search')

        updatedRecipes = []

        allRecipes.forEach(recipe => {

            // Récupération des noms des ingrédients de la recette

            let allIngredientsNamesOfThisRecipe = []

            recipe.ingredients.forEach(ingredient => {

                allIngredientsNamesOfThisRecipe.push(ingredient.ingredient.toLowerCase())

            });

            // Check de la recherche

            function checkForSearchQuery() {

                if (currentSearch !== null) {

                    if (recipe.name.toLowerCase().includes(currentSearch) || recipe.description.includes(currentSearch) || allIngredientsNamesOfThisRecipe.includes(currentSearch)) {

                        return true

                    }

                } else {

                    return true

                }

            }

            // Check des ustensils

            function checkForUstensil() {

                let recipeUstensilToLowerCase = recipe.ustensils.map(elt => {
                    return elt.toLowerCase()
                })

                if (displayedTagsParams.ustensils.length > 0) {

                    if (displayedTagsParams.ustensils.every(ustensil => recipeUstensilToLowerCase.toString().includes(ustensil))) {

                        console.log("OK")

                        return true

                    } else {

                        return false

                    }

                } else {

                    return true

                }

            }

            // Check des appareils

            function checkForAppliance() {

                if (displayedTagsParams.appliance.length > 0) {

                    if (displayedTagsParams.appliance.every(appliance => recipe.appliance.toLowerCase().includes(appliance))) {

                        return true

                    } else {

                        return false

                    }

                } else {

                    return true

                }

            }

            // Check des ingredients

            function checkForIngredients() {

                if (displayedTagsParams.ingredients.length > 0) {

                    if (displayedTagsParams.ingredients.every(ingredient => allIngredientsNamesOfThisRecipe.toString().includes(ingredient))) {

                        return true

                    } else {

                        return false

                    }

                }

                else {

                    return true

                }

            }

            // Check final de tous les filtres

            checkForSearchQuery() && checkForUstensil() && checkForAppliance() && checkForIngredients() ? updatedRecipes.push(recipe) : null;

        });

        currentlyDisplayedRecipes = updatedRecipes

        generateRecipesDOM()

        updateFilters()

    }

    // SEARCH UNIQUEMENT

    else if ((Object.values(displayedTagsParams).every((array) => array.length === 0)) && (currentSearch !== null)) {

        console.log('Recherche par search uniquement')

        updatedRecipes = []

        allRecipes.forEach(recipe => {

            // Récupération des noms des ingrédients de la recette

            let allIngredientsNamesOfThisRecipe = []

            recipe.ingredients.forEach(ingredient => {

                allIngredientsNamesOfThisRecipe.push(ingredient.ingredient.toLowerCase())

            });

            // Check de la recherche

            function checkForSearchQuery() {

                if (currentSearch !== null) {

                    if (recipe.name.toLowerCase().includes(currentSearch) || recipe.description.includes(currentSearch) || allIngredientsNamesOfThisRecipe.includes(currentSearch)) {

                        return true

                    }

                } else {

                    return true

                }

            }

            checkForSearchQuery() ? updatedRecipes.push(recipe) : null;

        });

        currentlyDisplayedRecipes = updatedRecipes

        generateRecipesDOM()

        updateFilters()

    }

    // TAGS UNIQUEMENT

    else if ((!Object.values(displayedTagsParams).every((array) => array.length === 0)) && (currentSearch === null)) {

        console.log('Recherche par tag uniquement')

        updatedRecipes = []

        allRecipes.forEach(recipe => {

            // Récupération des noms des ingrédients de la recette

            let allIngredientsNamesOfThisRecipe = []

            recipe.ingredients.forEach(ingredient => {

                allIngredientsNamesOfThisRecipe.push(ingredient.ingredient.toLowerCase())

            });

            // Check des ustensils

            function checkForUstensil() {

                if (displayedTagsParams.ustensils.length > 0) {

                    let recipeUstensilToLowerCase = recipe.ustensils.map(elt => {
                        return elt.toLowerCase()
                    })

                    if (displayedTagsParams.ustensils.every(ustensil => recipeUstensilToLowerCase.toString().includes(ustensil))) {

                        console.log("OK")

                        return true

                    } else {

                        return false

                    }

                } else {

                    return true

                }

            }

            // Check des appareils

            function checkForAppliance() {

                if (displayedTagsParams.appliance.length > 0) {

                    if (displayedTagsParams.appliance.every(appliance => recipe.appliance.toLowerCase().includes(appliance))) {

                        return true

                    } else {

                        return false

                    }

                } else {

                    return true

                }

            }

            // Check des ingredients

            function checkForIngredients() {

                if (displayedTagsParams.ingredients.length > 0) {

                    if (displayedTagsParams.ingredients.every(ingredient => allIngredientsNamesOfThisRecipe.toString().includes(ingredient))) {

                        return true

                    } else {

                        return false

                    }

                }

                else {

                    return true

                }

            }

            // Check final de tous les filtres

            checkForUstensil() && checkForAppliance() && checkForIngredients() ? updatedRecipes.push(recipe) : null;

        });

        currentlyDisplayedRecipes = updatedRecipes

        generateRecipesDOM()

        updateFilters()

    }

    else {

        console.log('Aucune recherche')

        // AUCUN TAG

        updatedRecipes = []

        currentlyDisplayedRecipes = allRecipes

        generateRecipesDOM()

        updateFilters()

    }

}

// Génération des recettes

function generateRecipesDOM() {

    recipesSection.innerHTML = ''

    currentlyDisplayedRecipes.forEach(recipe => {

        const recipeCard = recipeFactory(recipe);
        const recipeDOM = recipeCard.getRecipeDOM();
        recipesSection.appendChild(recipeDOM);

    });
}

function updateFilters() {

    updateAppliances()
    updateUstensils()
    updateIngredients()

}