let botaoAdd = document.getElementById('botaoAdd');
let listaTarefas = document.getElementById('listaTarefas');
let inputDigitarTarefa = document.getElementById('digitarTarefa');

botaoAdd.addEventListener('click', botaoAdicionar)

botaoAdd.addEventListener('click', function(){
    console.log(inputDigitarTarefa.value)
    if(inputDigitarTarefa.value.length == 0){
        alert("Digite uma tarefa!")
        return false;
    }
});

//adicionando tarefas
function botaoAdicionar() {
    console.log("aaaaaaa")
    let tarefaLi = document.createElement("li")
    tarefaLi.innerHTML = inputDigitarTarefa.value //ve o valor do meu input e se tiver maior que 0 ele adiciona no html
    listaTarefas.appendChild(tarefaLi)    
}


