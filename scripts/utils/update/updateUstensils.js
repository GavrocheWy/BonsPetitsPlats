// Mise à jour des éléments selon les events

let updatedUstensils = []

const ustensilsField = document.querySelector('#ustensils-field')

// À l'écriture dans un champs

ustensilsField.addEventListener('input', function (e) {

    updateTagWhenTyping(e, 'ustensil')

})

// Update de la liste des champs

function updateUstensils() {

    if (updatedRecipes.length > 0) {

        updatedUstensils = []

        updatedRecipes.forEach(recipe => {

            const ustensilsOfThisRecipe = recipe.ustensils

            ustensilsOfThisRecipe.forEach(ustensils => {

                const thisFormatedUstensil = ustensils.toLowerCase().replace('.', '')

                let isThisUstensilAlreadyInArray = updatedUstensils.find(ustensil => ustensil === thisFormatedUstensil)

                // Vérifier si le tag est déjà enregistré

                if (!checkIfTagIsAlreadyChecked(thisFormatedUstensil, 'ustensils')) {

                    // Rechercher l'ingredient dans le tableau

                    if (!isThisUstensilAlreadyInArray) {

                        updatedUstensils.push(thisFormatedUstensil)

                    }

                }

            });


        });

        currentlyDisplayedUstensils = updatedUstensils

    } else {

        currentlyDisplayedUstensils = allUstensils

    }

    displayUstensils()

}