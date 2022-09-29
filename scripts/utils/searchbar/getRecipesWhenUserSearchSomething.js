const searchbar = document.querySelector('#recipe-search-field')

let currentSearch = null

searchbar.addEventListener('input', function (e) {

    const valueTypped = e.target.value.trim()
    e.preventDefault()
    getRecipesWhenUserSearchSomething(valueTypped)

})

function getRecipesWhenUserSearchSomething(val) {

    if (val.length >= 3) {

        currentSearch = val.toLowerCase()

        displayRecipes()

    } else {

        currentSearch = null

        displayRecipes()

    }

}