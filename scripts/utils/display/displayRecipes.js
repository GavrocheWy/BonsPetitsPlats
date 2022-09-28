// Display all recipes

const updatedRecipes = []

const recipesSection = document.querySelector('.main-content__display')

const displayRecipes = () => {

    console.log(' ')
    console.log('- - - REFRESH - - -')
    console.log(displayedTagsParams)

    // CHECK DES TAGS

    if (!Object.values(displayedTagsParams).every((array) => array.length === 0)) {

        console.log('Conclusion : Il y a des tags')

        function checkAndApplySpecificTagType(type) {

            // CHECK SI IL Y A UN TAG SPECIFIQUE

            if (displayedTagsParams[type].length > 0) {

                displayedTagsParams[type].forEach(tag => {

                    if (updatedRecipes.length === 0) {

                        allRecipes.forEach(recipe => {

                            if (typeof recipe[type] === 'string') {
                                
                                if (recipe[type].toLowerCase() === tag) {

                                    updatedRecipes.push(recipe)

                                    console.log('Recettes actualisées :', updatedRecipes)

                                }
        
                            }
        
                        });

                    } else if (updatedRecipes.length > 0) {

                        updatedRecipes.forEach(recipe => {

                            if (typeof recipe[type] === 'string') {
                                
                                if (recipe[type].toLowerCase() === tag) {

                                    updatedRecipes.push(recipe)

                                    console.log('Recettes actualisées :', updatedRecipes)

                                }
        
                            }

                        })

                    }
                    
                });

            } else {

                console.log(`- Le tag de type ${type} est vide`)

            }

        }

        checkAndApplySpecificTagType('ingredients')
        checkAndApplySpecificTagType('appliance')
        checkAndApplySpecificTagType('ustensils')

        currentlyDisplayedRecipes = updatedRecipes
        
        generateRecipesDOM()

        console.log('Recettes générées avec filtre(s)')


    } else {

        // AUCUN TAG + AUCUNE RECHERCHE

        console.log('Conclusion : Il n\'y a aucun tag')

        currentlyDisplayedRecipes = allRecipes

        generateRecipesDOM()

        console.log('Recettes générées sans filtre')

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