// Get all uniques appliances

function getAllUniquesAppliances() {

    // Récupération initiale de tous les appareils

    currentlyDisplayedRecipes.forEach(recipe => {

        const thisFormatedAppliance = recipe.appliance.toLowerCase().replace('.', '')

        const isThisApplianceAlreadyInArray = allAppliances.find(appliance => appliance === thisFormatedAppliance)

        // Rechercher l'appareil dans le tableau

        if (!isThisApplianceAlreadyInArray) {
            allAppliances.push(thisFormatedAppliance)
        }

    });

    currentlyDisplayedAppliances = allAppliances

}