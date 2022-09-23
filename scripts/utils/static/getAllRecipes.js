const getAllRecipes = () => {

    // Vérifier qu'il existe des recettes

    if (typeof recipes !== 'undefined' && recipes.length) {

        // Pour chaque recette :

        recipes.forEach((recipe) => {

            allRecipes.push(recipe)

        });

    } else {

        console.log('Il n\'y a aucune recette')

    }

}