let btnSelecionarR = document.getElementById('btnSelecionarR')
let SelecionarTres = document.getElementById('SelecionarTres')
let SelecionarSoUm = document.getElementById('SelecionarSoUm')
let SelecionarLivre = document.getElementById('SelecionarLivre')

btnSelecionarR.addEventListener('click' , selecionaBtn)

let estadoDoBtn = false; 

function selecionaBtn (){
    console.log('ouviu')

    if(!estadoDoBtn) {
        btnSelecionarR.classList.add("btn-selecionado")
        estadoDoBtn = true;
    }
}

//SELECIONAR ATÉ 3
function SelecionarTres(){}
//SELECIOAR APENAS 1
function SelecionarSoUm(){}
//SELECIONAR QUANTOS QUISER
function SelecionarLivre(){}