let nomeUserRef = document.querySelector('#nameUser')
let adicionaTarefaRef = document.querySelector('#adicionaTarefa')
let novaTarefaRef = document.querySelector('#novaTarefa')
let skeletonRef = document.querySelector('#skeleton')
let tarefasPendentesRef = document.querySelector('.tarefas-pendentes')

let requestConfiguration = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
}

fetch('https://ctd-todo-api.herokuapp.com/v1/users/getMe', requestConfiguration)
.then(response => {
    return response.json()
})
.then(data => {
    nomeUserRef.innerHTML = `<p>${data.firstName}</p>`

} )


adicionaTarefaRef.addEventListener('click', event => {
    event.preventDefault()

    let tarefas = {
        description: novaTarefaRef.value,
        completed: false
    }

    let requestHeadersPost = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }


    let requestConfigurationPost = {
        method: 'POST',
        body: JSON.stringify(tarefas),
        headers: requestHeadersPost
    }

    fetch('https://ctd-todo-api.herokuapp.com/v1/tasks',requestConfigurationPost)
        .then(response => {
            response.json().then(
                data => {
                    //  for (let task of tasks) {
  
                        skeletonRef.remove('#skeleton');
                        tarefasPendentesRef.innerHTML += `
                                <li class="tarefa">
                                <div class="not-done"></div>
                                <div class="descricao">
                                  <p class="nome">${data.description}</p>
                                  <p class="timestamp">Criada em: ${data.createdAt}</p>
                                </div>
                              </li>             `
                    //  }
                }
            )
        })

})
