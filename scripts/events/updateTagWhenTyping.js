function updateTagWhenTyping(event, tag) {

    const valueTyped = event.target.value.trim()

    if (valueTyped.length >= 3) {

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

    } else if (valueTyped.length < 3) {

        switch (tag) {

            case ('appliance'):

                currentlyDisplayedAppliances = []

                currentlyDisplayedAppliances = allAppliances

                displayAppliances()

                console.log(allAppliances)

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