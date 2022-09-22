// Get all uniques ustensils

function getAllUniquesUstensils() {

    // Récupération initiale de tous les appareils

    currentlyDisplayedRecipes.forEach(recipe => {

        const ustensilsOfThisRecipe = recipe.ustensils

        ustensilsOfThisRecipe.forEach(ustensils => {

            const formatedUstensilName = ustensils.toLowerCase().replace('.', '')

            const isThisUstensilAlreadyInArray = currentlyDisplayedUstensils.find(ustensil => ustensil === formatedUstensilName)

            // Rechercher l'ingredient dans le tableau

            if (!isThisUstensilAlreadyInArray) {
                currentlyDisplayedUstensils.push(formatedUstensilName)
            }

        });

    });

    console.log('Voici le tableau des ustensiles :', currentlyDisplayedUstensils)

}