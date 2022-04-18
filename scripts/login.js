import validacao from './validacao.js'
let buttonLoginRef = document.querySelector('#btAcessar')
let inputEmailRef = document.querySelector('#inputEmail')
let inputSenhaRef = document.querySelector('#inputPassword')
let botaoAcessarReferencia = document.querySelector('#btAcessar')
let controladoresReferencia = document.querySelectorAll('.controlador')
// let inputNomeReferencia = document.querySelector('#inputEmail')
// let inputSobrenomeReferencia = document.querySelector('#inputPassword')



validacao(controladoresReferencia, botaoAcessarReferencia)

botaoAcessarReferencia.addEventListener('click', function (event) {
    
    event.preventDefault()       

    console.log("teste")
})


buttonLoginRef.addEventListener('click', event => {
    event.preventDefault()

    let credentials = {

        email: inputEmailRef.value,
        password: inputSenhaRef.value

    }

    let requestHeaders = {
        'Content-Type': 'application/json'
    }

    let requestConfiguration = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: requestHeaders

    }

    fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', requestConfiguration).then(
        response => {
            if (response.ok) {
                response.json().then(
                    data => {
                        console.log(data)
                        localStorage.setItem('token', data.jwt)
                         window.location.href = './tarefas.html'
                    }
                )
            }
        }
    )
})