// Mise à jour des éléments selon les events

let updatedAppliances = []

const appliancesField = document.querySelector('#appliances-field')

// À l'écriture dans un champs

appliancesField.addEventListener('input', function (e) {

    updateTagWhenTyping(e, 'appliance')

})

// Update de la liste des champs

function updateAppliances() {

    if (updatedRecipes.length > 0) {

        updatedAppliances = []

        updatedRecipes.forEach(recipe => {

            const thisFormatedAppliance = recipe.appliance.toLowerCase().replace('.', '')
    
            let isThisApplianceAlreadyInArray = updatedAppliances.find(appliance => appliance === thisFormatedAppliance)
    
            // Rechercher l'appareil dans le tableau
    
            if (!isThisApplianceAlreadyInArray) {
    
                // Vérifier si le tag est déjà enregistré
    
                if (!checkIfTagIsAlreadyChecked(thisFormatedAppliance, 'appliance')) {
    
                    updatedAppliances.push(thisFormatedAppliance)
    
                }
    
            }
    
        });

        currentlyDisplayedAppliances = updatedAppliances

    } else {

        currentlyDisplayedAppliances = allAppliances

    }

    displayAppliances()

}