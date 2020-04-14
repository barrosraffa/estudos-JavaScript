let SelecionarTres = document.getElementById('SelecionarTres')
let SelecionarSoUm = document.getElementById('SelecionarSoUm')
let SelecionarLivre = document.getElementById('SelecionarLivre')

let btnSelecionarRafa = document.getElementById('btnSelecionarRafa')
let btnSelecionarDiego = document.getElementById('btnSelecionarDi')
let btnSelecionarLara = document.getElementById('btnSelecionarLara')
let btnSelecionarCarol = document.getElementById('btnSelecionarCarol')

let btnSelecionarUm = document.getElementById('btnSelecionarUm')
let btnSelecionarDois = document.getElementById('btnSelecionarDois')
let btnSelecionarTres = document.getElementById('btnSelecionarTres')
let btnSelecionarQuatro = document.getElementById('btnSelecionarQuatro')

let btnSelecionarA = document.getElementById('btnSelecionarA')
let btnSelecionarB = document.getElementById('btnSelecionarB')
let btnSelecionarC = document.getElementById('btnSelecionarC')
let btnSelecionarD = document.getElementById('btnSelecionarD')

btnSelecionarRafa.addEventListener('click', BotaoSelecionarLivre)
btnSelecionarDiego.addEventListener('click', BotaoSelecionarLivre)
btnSelecionarLara.addEventListener('click', BotaoSelecionarLivre)
btnSelecionarCarol.addEventListener('click', BotaoSelecionarLivre)

btnSelecionarUm.addEventListener('click', BotaoSelecionarSoUm)
btnSelecionarDois.addEventListener('click', BotaoSelecionarSoUm)
btnSelecionarTres.addEventListener('click', BotaoSelecionarSoUm)
btnSelecionarQuatro.addEventListener('click', BotaoSelecionarSoUm)

btnSelecionarA.addEventListener('click', BotaoSelecionarTres)
// btnSelecionarB.addEventListener('click', BotaoSelecionarTres)
// btnSelecionarC.addEventListener('click', BotaoSelecionarTres)
// btnSelecionarD.addEventListener('click', BotaoSelecionarTres)

let estadoDaDiv = false; 

//SELECIONAR ATÉ 3
function BotaoSelecionarTres(){
    console.log('ouviu')
    if(!estadoDaDiv) {
        btnSelecionarA.classList.add('btn-selecionado')
        estadoDaDiv = true
    }
    else {
        btnSelecionarA.classList.remove('btn-selecionado')
        estadoDaDiv = false
    }
}

//SELECIOAR APENAS 1
function BotaoSelecionarSoUm(){
    console.log('deu certo')
}

//SELECIONAR QUANTOS QUISER
function BotaoSelecionarLivre(){
    console.log('isso ai')
}

//validar as sections, se não estiver selecionada não deixar ir pra próxima etapda
// disabled = false;