import validacao from './validacao.js'

let botaoAcessarReferencia = document.querySelector('#btAcessar')
let controladoresReferencia = document.querySelectorAll('.controlador')
// let inputNomeReferencia = document.querySelector('#inputEmail')
// let inputSobrenomeReferencia = document.querySelector('#inputPassword')



validacao(controladoresReferencia, botaoAcessarReferencia)

botaoAcessarReferencia.addEventListener('click', function (event) {
    
    event.preventDefault()       

    console.log("teste")
})