// Affichage des éléments

function displayUstensils() {

    // Selecteurs

    const ustensilsSection = document.querySelector('#ustensils-suggestions')
    const ustensilsField = document.querySelector('#ustensils-field')

    // Empty the section

    ustensilsSection.innerHTML = ''

    // NO RECIPE FILTERED

    currentlyDisplayedUstensils.forEach(ustensil => {

        // Verify if tag is already checked

        if (!checkIfTagIsAlreadyChecked(ustensil, 'ustensils')) {

            const suggestionButton = document.createElement('button')

            suggestionButton.textContent = ustensil
            suggestionButton.setAttribute('id', ustensil)
            suggestionButton.setAttribute('data-type', 'ustensils')
            suggestionButton.classList.add('main-content__search-filters--suggestions-btn')
    
            ustensilsSection.appendChild(suggestionButton)

            // Tag Button configuration
    
            suggestionButton.addEventListener('click', function (e) {
                e.preventDefault()
                const btnName = suggestionButton.getAttribute('id')
                const btnType = suggestionButton.getAttribute('data-type')

                ustensilsField.value = ''
                addTagToTagList(btnName, btnType)
                suggestionButton.remove()
            })

        }
        
    });

}