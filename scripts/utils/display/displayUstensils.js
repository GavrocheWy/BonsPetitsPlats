// Affichage des éléments

function displayUstensils() {

    // Selecteurs

    const ustensilsSection = document.querySelector('#ustensils-suggestions')
    const ustensilsField = document.querySelector('#ustensils-field')

    // Empty the section

    ustensilsSection.innerHTML = ''

    if (currentlyDisplayedUstensils.length === 0) {

        const noOneItemLeft = document.createElement('p')
        noOneItemLeft.textContent = `Aucun ustensile restant`
        noOneItemLeft.classList.add('main-content__search-filters--suggestions-no-one-left')
        ustensilsSection.appendChild(noOneItemLeft)

    } else {

        currentlyDisplayedUstensils.forEach(ustensil => {

            const suggestionButton = document.createElement('button')

            suggestionButton.textContent = ustensil
            suggestionButton.setAttribute('id', ustensil)
            suggestionButton.setAttribute('data-type', 'ustensils')
            suggestionButton.classList.add('main-content__search-filters--suggestions-btn')

            ustensilsSection.appendChild(suggestionButton)

            // Tag Button configurations

            suggestionButton.addEventListener('click', function (e) {

                e.preventDefault()

                const btnName = suggestionButton.getAttribute('id')
                const btnType = suggestionButton.getAttribute('data-type')

                ustensilsField.value = ''

                addTagToTagList(btnName, btnType)
            })

        });

    }



}