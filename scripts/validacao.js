
export default function validacao(controladores, btReferencia){

    for(let controladorReferencia of controladores){
        let inputReferencia = controladorReferencia.children[1]

        inputReferencia.addEventListener('keyup', function(){
            if(inputReferencia.checkValidity()){
                controladorReferencia.classList.remove('erro')
                btReferencia.disabled = false
            }else
                controladorReferencia.classList.add('erro')
                btReferencia.disabled = true
        })

    }

}