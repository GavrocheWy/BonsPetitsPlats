function recipeFactory(recipe) {

    const { id, name, servings, ingredients, time, description, appliance, ustensils } = recipe

    function getRecipeDOM() {

        const article = document.createElement('article')
        const imageFrame = document.createElement('div')
        const img = document.createElement('img')
        const articleHeader = document.createElement('header')
        const articleTitle = document.createElement('h2')
        const durationBox = document.createElement('div')
        const durationIconFrame = document.createElement('div')
        const durationText = document.createElement('p')
        const articleContent = document.createElement('section')
        const ingredientsList = document.createElement('ul')
        const description = document.createElement('p')

        // Text content

        articleTitle.textContent = recipe.name
        durationText.textContent = recipe.time + ' ' + 'min'
        description.textContent = recipe.description

        // Ingrédients

        if (typeof recipe.ingredients !== 'undefined' && recipe.ingredients.length) {

            recipe.ingredients.forEach(ingredient => {

                const thisIngredient = document.createElement('li')

                thisIngredient.textContent = ingredient.ingredient

                // Check if ingredient as quantity / quantite and unit

                if (typeof ingredient.quantity !== 'undefined' || typeof ingredient.quantite !== 'undefined') {

                    const thisIngredientQtt = document.createElement('span')

                    thisIngredient.appendChild(thisIngredientQtt)

                    thisIngredientQtt.classList.add('displayed-recipe__main--ingredients-item-qtt')

                    if (typeof ingredient.quantity !== 'undefined') {

                        if (typeof ingredient.unit !== 'undefined') {
                            thisIngredientQtt.textContent = ' : ' + ingredient.quantity + ' ' + ingredient.unit
                        } else {
                            thisIngredientQtt.textContent = ' : ' + ingredient.quantity
                        }

                    }

                    if (typeof ingredient.quantite !== 'undefined') {

                        if (typeof ingredient.unit !== 'undefined') {
                            thisIngredientQtt.textContent = ' : ' + ingredient.quantite + ' ' + ingredient.unit
                        } else {
                            thisIngredientQtt.textContent = ' : ' + ingredient.quantite
                        }

                    }

                }

                // END OF - Check if ingredient as quantity / quantite and unit
                
                thisIngredient.classList.add('displayed-recipe__main--ingredients-item')

                ingredientsList.appendChild(thisIngredient)

            });

        }

        // Ajout des classes

        article.classList.add('displayed-recipe')
        imageFrame.classList.add('displayed-recipe__image-frame')
        img.classList.add('displayed-recipe__image-frame--img')
        articleHeader.classList.add('displayed-recipe__header')
        articleTitle.classList.add('displayed-recipe__header--title')
        durationBox.classList.add('displayed-recipe__header--duration')
        durationIconFrame.classList.add('displayed-recipe__header--duration-icon')
        durationText.classList.add('displayed-recipe__header--duration-text')
        articleContent.classList.add('displayed-recipe__main')
        ingredientsList.classList.add('displayed-recipe__main--ingredients')
        description.classList.add('displayed-recipe__main--description')

        // Build

        article.appendChild(imageFrame)
        article.appendChild(articleHeader)
        article.appendChild(articleContent)

        imageFrame.appendChild(img)

        articleHeader.appendChild(articleTitle)
        articleHeader.appendChild(durationBox)

        durationBox.appendChild(durationIconFrame)
        durationBox.appendChild(durationText)

        articleContent.appendChild(ingredientsList)
        articleContent.appendChild(description)

        // Render

        return (article)

    }

    return { id, name, servings, ingredients, time, description, appliance, ustensils, getRecipeDOM }

}