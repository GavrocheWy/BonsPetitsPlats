// Mise à jour des éléments selon les events

const ingredientsField = document.querySelector('#ingredients-field')

ingredientsField.addEventListener('input', function (e) {

    updateTagWhenTyping(e, 'ingredient')

})

// Update de la liste des champs

function updateIngredients() {

    if (updatedRecipes.length > 0) {

        updatedIngredients = []

        updatedRecipes.forEach(recipe => {

            const ingredientsOfThisRecipe = recipe.ingredients

            ingredientsOfThisRecipe.forEach(ingredient => {

                const thisFormatedIngredient = ingredient.ingredient.toLowerCase().replace('.', '')

                let isThisIngredientAlreadyInArray = updatedIngredients.find(ingredient => ingredient === thisFormatedIngredient)

                // Vérifier si le tag est déjà enregistré

                if (!checkIfTagIsAlreadyChecked(thisFormatedIngredient, 'ingredients')) {

                    // Rechercher l'ingredient dans le tableau

                    if (!isThisIngredientAlreadyInArray) {

                        updatedIngredients.push(thisFormatedIngredient)

                    }

                }

            });


        });

        currentlyDisplayedIngredients = updatedIngredients

    } else {

        currentlyDisplayedIngredients = allIngredients

    }

    displayIngredients()

}