function addTagToTagList(tag, type) {

    const tagsSection = document.querySelector('.main-content__search-current-tags')
    const tagButton = document.createElement('button')

    tagButton.textContent = tag

    tagsSection.appendChild(tagButton)

    displayedTagsParams[type].push(tag)

    tagButton.addEventListener('click', function(e) {
        e.preventDefault
        const valueInDisplayedTagsParams = displayedTagsParams[type].indexOf(tag)
        if (valueInDisplayedTagsParams > -1) {
            displayedTagsParams[type].splice(valueInDisplayedTagsParams, 1)
        }
        tagButton.remove()
    })

}