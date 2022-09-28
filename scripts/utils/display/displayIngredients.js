// Affichage des éléments

function displayIngredients() {

    // Selecteurs

    const ingredientsSection = document.querySelector('#ingredients-suggestions')
    const ingredientsField = document.querySelector('#ingredients-field')

    // Empty the section

    ingredientsSection.innerHTML = ''

    // NO RECIPE FILTERED

    currentlyDisplayedIngredients.forEach(appliance => {

        // Verify if tag is already checked

        if (!checkIfTagIsAlreadyChecked(appliance, 'ingredients')) {

            const suggestionButton = document.createElement('button')

            suggestionButton.textContent = appliance
            suggestionButton.setAttribute('id', appliance)
            suggestionButton.setAttribute('data-type', 'ingredients')
            suggestionButton.classList.add('main-content__search-filters--suggestions-btn')

            ingredientsSection.appendChild(suggestionButton)

            // Tag Button configurations

            suggestionButton.addEventListener('click', function (e) {
                e.preventDefault()
                const btnName = suggestionButton.getAttribute('id')
                const btnType = suggestionButton.getAttribute('data-type')
                
                ingredientsField.value = ''
                addTagToTagList(btnName, btnType)
                suggestionButton.remove()

                currentlyDisplayedIngredients = allIngredients
                displayIngredients()
            })

        }

    });

}