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
        tarefaLi.classList.toggle('tarefa-concluida'); 
        // toggle alterna entre um e outro
    })

    // concluindo todas as tarefas
    btnConcluirTodas.addEventListener('click', function () {
        console.log('funfou?')
        tarefaLi.classList.add('tarefa-concluida')
    })

    // desmarcando todas as tarefas
    btnDesmarcarTodas.addEventListener('click', function(){
        tarefaLi.classList.remove('tarefa-concluida')
    })

    // removendo todas as tarefas
    btnExcluirTodas.addEventListener('click', function () {
        tarefaLi.remove()
    })

    // Adiciona o atributo que permite a movimentação
    tarefaLi.setAttribute('draggable', true);

    //Seleciona o evento de click, define que o elemento pode ser arrastado (guarda a classe numa variável)
    tarefaLi.addEventListener('dragstart', dragStart);

    //Seleciona a localização do evento de click e direciona para inserção depois do proximo elemento
    tarefaLi.addEventListener('dragover', dragOver);

    // Finaliza o momvimento
    tarefaLi.addEventListener('dragend', dragEnd);

    function dragStart(event) {
        dragging = event.target.closest('li');
    }

    function dragOver(event) {
        const location = event.target.closest('li');
        this.parentNode.insertBefore(dragging, location);// this.parentNode equivale a class timeline
    }
    function dragEnd() {
        dragging = null;//usamos o dragging = null para dizer que deve parar o movimento

    }

}

// adicionais

// botao adicionar com enter
// Adicionar o atributo que permite a movimentação
