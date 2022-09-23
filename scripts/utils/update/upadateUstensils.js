// Mise à jour des éléments selon les events

const ustensilsField = document.querySelector('#ustensils-field')

ustensilsField.addEventListener('input', function (e) {

    updateTagWhenTyping(e, 'ustensil')

})