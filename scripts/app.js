function init() {
    // Fonctions d'initialisation (au lancement de la page)
    getAllRecipes()

    // Faire apparaitre toutes les recettes
    displayRecipes()

    // Remplis les trois selecteurs avec les différentes propositions
    getAllUniquesAppliances()
    getAllUniquesIngredients()
    getAllUniquesUstensils()

    // Afficher les tags
    displayAppliances()
    displayIngredients()
    displayUstensils()

}

init()