import validacao from './validacao.js'

let btAcessarRef = document.querySelector('#btCadastrar')
let nomeRef = document.querySelector('#inputNome')
let sobrenomeRef = document.querySelector('#inputSobrenome')
let emailRef = document.querySelector('#inputEmail')
let senhaRef = document.querySelector('#inputSenha')
let repetirSenha = document.querySelector('inputRepetirSenha')
let controladoresReferencia = document.querySelectorAll('.controlador')





validacao(controladoresReferencia, btAcessarRef)

btAcessarRef.addEventListener('click', event => {

    if(senhaRef.value)
    event.preventDefault()

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


})


emailRef .addEventListener("keyup", function (event) {
    event.preventDefault()
    if (emailRef.validity.typeMismatch) {
        emailRef.setCustomValidity("Você deve inserir um endereço de e-mail");
    } else {
        emailRef.setCustomValidity("");
    }
  }); 

  



//    if(validarPassword(senhaRef.value, repetirSenha.value)){
//     Swal.fire({
//         icon: 'error',
//         title: 'Ops...',
//         text: 'As senhas não são iguais'
//       }) 
//     }
//       if(errorList=={}){
//         mostrarSpinner();
       
//         usuario = {
//             nome: nameRef.value,
//             sobrenome: sobreRef.value,
//             email: emailRef.value,
//             password: pwdRef.value
//         }

//         if(criarUsuario(usuario)){
//             window.location.href = "tarefas.html";
//         }
//     }else{
//         errorList = {};
//     }

//   }
//   let btAcessarRef = document.querySelector('#btCadastrar')
//   let nomeRef = document.querySelector('#inputNome')
//   let sobrenomeRef = document.querySelector('#inputSobrenome')
//   let emailRef = document.querySelector('#inputEmail')
//   let senhaRef = document.querySelector('#inputSenha')
//   let repetirSenha = document.querySelector('inputRepetirSenha')
//   let controladoresReferencia = document.querySelectorAll('.controlador')