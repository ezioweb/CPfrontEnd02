export default function validacao(controlesRef, btReferencia){
   
    for (let controladorReferencia of controlesRef){

        let inputReferencia = controladorReferencia.children[1]

        inputReferencia.addEventListener('keyup', () =>{

            if(inputReferencia.checkValidity()){
                controladorReferencia.classList.remove('erro')
                btReferencia.disabled = false
            } else{
                controladorReferencia.classList.add('erro')
                btReferencia.disabled = true
            }
        })
    }
}
