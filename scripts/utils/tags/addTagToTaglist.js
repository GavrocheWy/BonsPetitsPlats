function addTagToTagList(tag, type) {

    const tagsSection = document.querySelector('.main-content__search-current-tags')
    const tagButton = document.createElement('button')
    const tagCloseContent = document.createElement('span')
    const tagCloseBtn = document.createElement('i')

    tagCloseContent.textContent = tag

    tagButton.classList.add('main-content__search-current-tags--tag')

    tagButton.classList.add(`tag-${type}`)

    tagCloseBtn.classList.add('far', 'fa-times-circle')

    tagButton.appendChild(tagCloseContent)
    tagButton.appendChild(tagCloseBtn)

    tagsSection.appendChild(tagButton)

    displayedTagsParams[type].push(tag)

    displayRecipes()

    // Application on selected tag clic

    tagButton.addEventListener('click', function (e) {

        e.preventDefault
        const valueInDisplayedTagsParams = displayedTagsParams[type].indexOf(tag)

        if (valueInDisplayedTagsParams > -1) {

            displayedTagsParams[type].splice(valueInDisplayedTagsParams, 1)

        }

        displayRecipes()

        tagButton.remove()
    })

    // Application on selected tag clic

}