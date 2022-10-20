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

                    if (displayedTagsParams.ustensils.every(ustensil => recipeUstensilToLowerCase.includes(ustensil))) {

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

                    if (displayedTagsParams.appliance.every(appliance => recipe.appliance.toLowerCase() === appliance)) {

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

                    if (displayedTagsParams.ingredients.every(ingredient => allIngredientsNamesOfThisRecipe.includes(ingredient))) {

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

        updatedRecipes = []

        for (let i = 0; i < allRecipes.length; i++) {

            let allIngredientsNamesOfThisRecipe = []

            let allIngredientsOfThisRecipe = allRecipes[i].ingredients

            for (let j = 0; j < allIngredientsOfThisRecipe.length; j++) {

                allIngredientsNamesOfThisRecipe.push(allIngredientsOfThisRecipe[j].ingredient.toLowerCase())

            }

            function checkForSearchQuery() {

                if (currentSearch !== null) {

                    const formatedRecipeName = allRecipes[i].name.toLowerCase()

                    const formatedRecipeDescription = allRecipes[i].description.toLowerCase()

                    if (formatedRecipeName.includes(currentSearch) || formatedRecipeDescription.includes(currentSearch) || allIngredientsNamesOfThisRecipe.includes(currentSearch)) {

                        return true

                    }

                } else {

                    return true

                }

            }

            checkForSearchQuery() ? updatedRecipes.push(allRecipes[i]) : null;

        }

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

                    if (displayedTagsParams.ustensils.every(ustensil => recipeUstensilToLowerCase.includes(ustensil))) {

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

                    if (displayedTagsParams.appliance.every(appliance => recipe.appliance.toLowerCase() === appliance)) {

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

                    if (displayedTagsParams.ingredients.every(ingredient => allIngredientsNamesOfThisRecipe.includes(ingredient))) {

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