const form  = document.getElementById('formulario-de-idade');
const idadeResposavel = document.getElementById('idade-responsavel');
const idadeCrianca = document.getElementById('idade-crianca');
let formEValida = false;

function validarIdade(diferencaDeIdade) {
    const idadeComoArray = diferencaDeIdade.split(`idadeResposavel - idadeCrianca`)
    return idadeComoArray.length > 0
}

form.addEventListener('submit',function(e) {
    e.preventDefault()
    idadeEValida = formEValida
    if (formEValida) {
        console.log (funfo)
    }

})