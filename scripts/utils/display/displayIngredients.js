// Affichage des éléments

function displayIngredients() {

    // Selecteurs

    const ingredientsSection = document.querySelector('#ingredients-suggestions')
    const ingredientsField = document.querySelector('#ingredients-field')

    // Empty the section

    ingredientsSection.innerHTML = ''

    if (currentlyDisplayedIngredients.length === 0) {

        const noOneItemLeft = document.createElement('p')
        noOneItemLeft.textContent = `Aucun ingrédient restant`
        noOneItemLeft.classList.add('main-content__search-filters--suggestions-no-one-left')
        ingredientsSection.appendChild(noOneItemLeft)

    } else {

        currentlyDisplayedIngredients.forEach(ingredient => {

            const suggestionButton = document.createElement('button')
    
            suggestionButton.textContent = ingredient
            suggestionButton.setAttribute('id', ingredient)
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
            })
    
        });
    }


}