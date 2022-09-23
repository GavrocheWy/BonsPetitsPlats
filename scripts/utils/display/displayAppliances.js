// Affichage des éléments

function displayAppliances() {

    const appliancesSection = document.querySelector('#appliances-suggestions')

    appliancesSection.innerHTML = ''

    currentlyDisplayedAppliances.forEach(appliance => {

        if (!checkIfTagIsAlreadyChecked(appliance, 'appliances')) {

            const suggestionButton = document.createElement('button')

            suggestionButton.textContent = appliance
            suggestionButton.setAttribute('id', appliance)
            suggestionButton.setAttribute('data-type', 'appliances')
            suggestionButton.classList.add('main-content__search-filters--suggestions-btn')

            appliancesSection.appendChild(suggestionButton)

            suggestionButton.addEventListener('click', function (e) {
                e.preventDefault()
                const btnName = suggestionButton.getAttribute('id')
                const btnType = suggestionButton.getAttribute('data-type')
                
                addTagToTagList(btnName, btnType)

                suggestionButton.remove()
            })

        }

    });

}