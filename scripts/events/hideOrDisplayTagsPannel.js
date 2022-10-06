const tagsPanels = document.querySelectorAll('.main-content__filter')

tagsPanels.forEach(panel => {

    const field = panel.querySelector('input')
    const btn = panel.querySelector('.main-content__filter-btn')
    const tagPanel = panel.querySelector('.main-content__search-filters--suggestions')

    btn.addEventListener('click', function (e) {
        e.preventDefault()

        if (panel.classList.contains('panel-active')) {
            removeAllActivePannels()
        } else {
            removeAllActivePannels()
            panel.classList.remove('panel-hidden')
            panel.classList.add('panel-active')
        }

    })

    field.addEventListener('focus', function() {

        if (panel.classList.contains('panel-active')) {
            removeAllActivePannels()
        } else {
            removeAllActivePannels()
            panel.classList.remove('panel-hidden')
            panel.classList.add('panel-active')
        }

    })

    document.body.addEventListener("click", function (element) {
        let clickedElement = element.target

        if (clickedElement !== panel
            && clickedElement !== btn
            && clickedElement !== btn.querySelector('i') 
            && clickedElement !== field
            && clickedElement !== tagPanel
            && !clickedElement.classList.contains('main-content__search-filters--suggestions-btn')) {

                if (panel.classList.contains('panel-active')) {
                    removeAllActivePannels()
                }

            }
    });

});

function removeAllActivePannels() {

    let activesPanel = document.querySelectorAll('.panel-active')

    activesPanel.forEach(panel => {

        panel.classList.remove('panel-active')
        panel.classList.add('panel-hidden')

    });

}