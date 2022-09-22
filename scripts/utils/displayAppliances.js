// Get all uniques appliances

function getAllUniquesAppliances() {

    // Récupération initiale de tous les appareils

    currentlyDisplayedRecipes.forEach(recipe => {

        const thisFormatedAppliance = recipe.appliance.toLowerCase().replace('.', '')

        const isThisApplianceAlreadyInArray = currentlyDisplayedAppliances.find(appliance => appliance === thisFormatedAppliance)

        // Rechercher l'appareil dans le tableau

        if (!isThisApplianceAlreadyInArray) {
            currentlyDisplayedAppliances.push(thisFormatedAppliance)
        }
        
    });

    console.log('Voici le tableau des appareils :', currentlyDisplayedAppliances)

}

// function displayAppliancesBySelectors() {



// }