let botaoAdd = document.getElementById('botaoAdd');
let listaTarefas = document.getElementById('listaTarefas');
let inputDigitarTarefa = document.getElementById('digitarTarefa');
let btnConcluirTodas = document.getElementById('btnConcluirTodas');
let btnDesmarcarTodas = document.getElementById('btnDesmarcarTodas');
let btnExcluirTodas = document.getElementById('btnExcluirTodas');

let estadoTarefaLi = true;

botaoAdd.addEventListener('click', botaoAdicionar)

botaoAdd.addEventListener('click', function(){
    console.log(inputDigitarTarefa.value)
    if(inputDigitarTarefa.value.length == 0){
        alert("Digite uma tarefa!")
        return false;
    }
});

function botaoAdicionar() {

    //adicionando tarefas
    let tarefaLi = document.createElement("li")
    tarefaLi.innerHTML = inputDigitarTarefa.value //ve o valor do meu input e se tiver maior que 0 ele adiciona no html
    listaTarefas.appendChild(tarefaLi)

    //limpando o input de tarefas
    inputDigitarTarefa.value = ' '

    // deletando uma tarefa 
    let deletarTarefa = document.createElement("span")
    deletarTarefa.innerText = "x"
    tarefaLi.appendChild(deletarTarefa)

    deletarTarefa.addEventListener("click" , function(){
        tarefaLi.remove()
    })

    // concluindo uma tarefa
    tarefaLi.addEventListener('click', function () {
        tarefaLi.tagName === 'li' 
        tarefaLi.classList.toggle('tarefa-concluida'); 
        // toggle alterna entre um e outro
    })

    // concluindo todas as tarefas
    btnConcluirTodas.addEventListener('click', function () {
        console.log('funfou?')
        btnConcluirTodas.tagName === 'LI'
        btnConcluirTodas.classList.add('tarefa-concluida')

    })

    // removendo todas as tarefas
    btnExcluirTodas.addEventListener('click', function () {
        tarefaLi.remove()
    })
}

// desmarcando todas as tarefas
// Adicionar o atributo que permite a movimentação
