// Affichage des éléments

function displayIngredients() {

    const ingredientsSection = document.querySelector('#ingredients-suggestions')

    ingredientsSection.innerHTML = ''

    currentlyDisplayedIngredients.forEach(ingredient => {

        if (!checkIfTagIsAlreadyChecked(ingredient, 'ingredients')) {

            const suggestionButton = document.createElement('button')

            suggestionButton.textContent = ingredient
            suggestionButton.setAttribute('id', ingredient.replace(' ', '-'))
            suggestionButton.setAttribute('data-type', 'ingredients')
            suggestionButton.classList.add('main-content__search-filters--suggestions-btn')

            ingredientsSection.appendChild(suggestionButton)

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