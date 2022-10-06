function updateTagWhenTyping(event, tag) {

    const valueTyped = event.target.value.trim().toLowerCase()

    // PLUS DE TROIS CARACTERES DANS LA RECHERCHE

    if (valueTyped.length >= 3) {

        // Et des filtres actifs

        if (updatedRecipes.length > 0) {

            switch (tag) {

                case ('appliance'):

                    currentlyDisplayedAppliances = []

                    currentlyDisplayedAppliances = updatedAppliances.filter(item => item.includes(valueTyped))

                    displayAppliances()

                    break;

                case ('ingredient'):

                    currentlyDisplayedIngredients = []

                    currentlyDisplayedIngredients = updatedIngredients.filter(item => item.includes(valueTyped))

                    displayIngredients()

                    break;

                case ('ustensil'):

                    currentlyDisplayedUstensils = []

                    currentlyDisplayedUstensils = updatedUstensils.filter(item => item.includes(valueTyped))

                    displayUstensils()

                    break;
            }

        // Et aucun filtre actif

        } else {

            switch (tag) {

                case ('appliance'):

                    currentlyDisplayedAppliances = []

                    currentlyDisplayedAppliances = allAppliances.filter(item => item.includes(valueTyped))

                    displayAppliances()

                    break;

                case ('ingredient'):

                    currentlyDisplayedIngredients = []

                    currentlyDisplayedIngredients = allIngredients.filter(item => item.includes(valueTyped))

                    displayIngredients()

                    break;

                case ('ustensil'):

                    currentlyDisplayedUstensils = []

                    currentlyDisplayedUstensils = allUstensils.filter(item => item.includes(valueTyped))

                    displayUstensils()

                    break;
            }

        }

        // MOINS DE TROIS CARACTERES DANS LA RECHERCHE

    } else {

        // Et des filtres actifs

        if (updatedRecipes.length > 0) {

            switch (tag) {

                case ('appliance'):

                    currentlyDisplayedAppliances = []

                    currentlyDisplayedAppliances = updatedAppliances

                    displayAppliances()

                    break;

                case ('ingredient'):

                    currentlyDisplayedIngredients = []

                    currentlyDisplayedIngredients = updatedIngredients

                    displayIngredients()

                    break;

                case ('ustensil'):

                    currentlyDisplayedUstensils = []

                    currentlyDisplayedUstensils = updatedUstensils

                    displayUstensils()

                    break;
            }

            // Et aucun filtre actif

        } else {

            switch (tag) {

                case ('appliance'):

                    currentlyDisplayedAppliances = []

                    currentlyDisplayedAppliances = allAppliances

                    displayAppliances()

                    break;

                case ('ingredient'):

                    currentlyDisplayedIngredients = []

                    currentlyDisplayedIngredients = allIngredients

                    displayIngredients()

                    break;

                case ('ustensil'):

                    currentlyDisplayedUstensils = []

                    currentlyDisplayedUstensils = allUstensils

                    displayUstensils()

                    break;
            }

        }

    }


}