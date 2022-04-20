let inputNomeRef = document.querySelector('#inputNome') 
let inputSobrenomeRef = document.querySelector('#inputSobrenome')
let inputEmailRef = document.querySelector('#inputEmail')
let inputSenhaRef = document.querySelector('#inputSenha')
let inputRepetirSenhaRef = document.querySelector('#inputRepetirSenha')
let buttonCadastrarRef = document.querySelector('#btCadastrar')
let buttonLoginRef = document.querySelector('#btCadastrar')
let controladoresRef = document.querySelectorAll('.controlador')
let inputs = document.querySelectorAll('[controlador]')

/* console.log(inputNomeRef, inputSobrenomeRef, inputEmailRef, inputSenhaRef, inputRepetirSenhaRef, buttonAcessarRef, buttonLoginRef) */

let formValidity = {
    inputNome: false,
    inputSobrenome: false,
    inputEmail: false,
    inputSenha: false,
    inputRepetirSenha: false
}

console.log(formValidity)

const validate = () => {
    for(let input of inputs){
    input.addEventListener('keyup', () => {//evento de para cada campo
        input.value.trim()
        console.log(input.id)
        formValidity[input.id] = input.checkValidity()
        if(input.checkValidity()){
            input.classList.remove('error')
            /* input.classList.add('ok') */
            buttonCadastrarRef.disable = false
        }
        else {
            input.classList.add('error')
            buttonCadastrarRef.disable = true
        }
        
    })
    }
}

validate()

buttonCadastrarRef.addEventListener('click', event =>{
    event.preventDefault
})