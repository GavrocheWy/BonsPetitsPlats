// Affichage des éléments

function displayAppliances() {

    // Selecteurs

    const appliancesSection = document.querySelector('#appliances-suggestions')
    const appliancesField = document.querySelector('#appliances-field')

    // Empty the section

    appliancesSection.innerHTML = ''

    if (currentlyDisplayedAppliances.length === 0) {

        const noOneItemLeft = document.createElement('p')
        noOneItemLeft.textContent = `Aucun appareil restant`
        noOneItemLeft.classList.add('main-content__search-filters--suggestions-no-one-left')
        appliancesSection.appendChild(noOneItemLeft)

    } else {

        currentlyDisplayedAppliances.forEach(appliance => {

            const suggestionButton = document.createElement('button')

            suggestionButton.textContent = appliance
            suggestionButton.setAttribute('id', appliance)
            suggestionButton.setAttribute('data-type', 'appliance')
            suggestionButton.classList.add('main-content__search-filters--suggestions-btn')

            appliancesSection.appendChild(suggestionButton)

            // Tag Button configurations

            suggestionButton.addEventListener('click', function (e) {

                e.preventDefault()

                const btnName = suggestionButton.getAttribute('id')
                const btnType = suggestionButton.getAttribute('data-type')

                appliancesField.value = ''

                addTagToTagList(btnName, btnType)

                updateAppliances()

            })

        });

    }



}