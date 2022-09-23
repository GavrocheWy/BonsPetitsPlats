// Mise à jour des éléments selon les events

const ingredientsField = document.querySelector('#ingredients-field')

ingredientsField.addEventListener('input', function (e) {

    updateTagWhenTyping(e, 'ingredient')

})