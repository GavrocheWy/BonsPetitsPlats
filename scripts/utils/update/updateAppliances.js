// Mise à jour des éléments selon les events

const appliancesField = document.querySelector('#appliances-field')

appliancesField.addEventListener('input', function (e) {

    updateTagWhenTyping(e, 'appliance')

})