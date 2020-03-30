let botaoAdd = document.getElementById('botaoAdd');
let listaTarefas = document.getElementById('listaTarefas');
let inputDigitarTarefa = document.getElementById('digitarTarefa');
let botaoTarefaConcluida = document.getElementById('botaoTarefaConcluida');
let btnDesmarcarTodas = document.getElementById('btnDesmarcarTodas');
let btnExcluirTodas = document.getElementById('btnExcluirTodas');

botaoAdd.addEventListener('click', botaoAdicionar)

botaoAdd.addEventListener('click', function(){
    console.log(inputDigitarTarefa.value)
    if(inputDigitarTarefa.value.length == 0){
        alert("Digite uma tarefa!")
        return false;
    }
});


function botaoAdicionar() {
    // console.log("aaaaaaa")

    //adicionando tarefas
    let tarefaLi = document.createElement("li")
    tarefaLi.innerHTML = inputDigitarTarefa.value //ve o valor do meu input e se tiver maior que 0 ele adiciona no html
    listaTarefas.appendChild(tarefaLi)

    //limpando o input de tarefas
    inputDigitarTarefa.value = ' '

    //removendo uma tarefa
    let deletarTarefa = document.createElement("span")
    deletarTarefa.innerText = "x"
    tarefaLi.appendChild(deletarTarefa)

    deletarTarefa.addEventListener("click" , function(){
        tarefaLi.remove()
    })

    // concluindo uma tarefa
}
    // deletando tarefas 
    // concluindo todas as tarefas
    // desmarcando todas as tarefas
    // removendo todas as tarefas
    // Adicionar o atributo que permite a movimentação
