function init() {
    // Fonctions d'initialisation (au lancement de la page)

    // Faire apparaitre toutes les recettes
    displayRecipes()

    // Remplis les trois selecteurs avec les différentes propositions
    getAllUniquesAppliances()
    getAllUniquesIngredients()
    getAllUniquesUstensils()

    console.log('Voici le tableau des recettes actuellement affichées :', currentlyDisplayedRecipes)
}

init()