import validacao from './validacao.js'
let btAcessarRef = document.querySelector('#btCadastrar')
let nomeRef = document.querySelector('#inputNome')
let sobrenomeRef = document.querySelector('#inputSobrenome')
let emailRef = document.querySelector('#inputEmail')
let senhaRef = document.querySelector('#inputSenha')
let repetirSenhaRef = document.querySelector('#inputRepetirSenha')
let controladoresReferencia = document.querySelectorAll('.controlador')
let SenhaIgualRef = document.querySelector('#senhaIgual')



// validação de campos
validacao(controladoresReferencia, btAcessarRef)

// Botão acessar aplicativo
btAcessarRef.addEventListener('click', event => {
    event.preventDefault()
    if(senhaRef.value === repetirSenhaRef.value){
    let users = {
        firstName: nomeRef.value,
        lastName: sobrenomeRef.value,
        email: emailRef.value,
        password: senhaRef.value
    }

    let requestHeaders = {
        'Content-Type': 'application/json'
    }

    let requestConfiguration = {
        method: 'POST',
        body: JSON.stringify(users),
        headers: requestHeaders
    }

    fetch('https://ctd-todo-api.herokuapp.com/v1/users/', requestConfiguration).then(
        response => {
            if (response.ok) {
                response.json().then(
                    data => {
                        localStorage.setItem('token', data.jwt)
                        window.location.href = './tarefas.html'
                    }
                )
            }
        }
    )  
    }else{
        SenhaIgualRef.classList.add('erro')
    }
 
})


  
