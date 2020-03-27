let elementoBotaoOff = document.querySelector('#acender-lampada');
// let elementoBotaoOn = document.querySelector('#btn-on');

let estadoImagem = false; //começa apagada
let estadoBotaoOff = false; // começa sem cor

// adiciona a ação ao html
elementoBotaoOff.addEventListener('click', acenderLampada);
elementoBotaoOff.addEventListener('click', trocaImagem)
// elementoBotaoOn.addEventListener('click', botaoOn);

    function trocaImagem (){
        console.log('help')
        let elementoImagem = document.getElementById("troca-imagem")
        if(!estadoImagem){
            elementoImagem.src="./assets/lampada-acesa.png"
            estadoImagem = true;
        }
        else {
            elementoImagem.src="./assets/lampada-apagada.png"
            estadoImagem = false;
        }
    }

    function acenderLampada (){
        let elementoBotaoOff = document.getElementById("acender-lampada")
        if(!estadoBotaoOff) {
            elementoBotaoOff.classList.add('btn-on')
            elementoBotaoOff.innerText = "apagar";
            estadoBotaoOff =  true;
        }
        else {
            console.log('rafaela')
            elementoBotaoOff.classList.remove('btn-on')
            elementoBotaoOff.innerText = "acender";
            estadoBotaoOff = false;
        }
        
    }


    // function botaoOn (){
    //     console.log('on')
        
    // }


    // estado inicial img preto e branco
    // clica no botao on troca pra classe on 
    // clica no botao off troca pra classe off

    // clicado bota a classe clicado se nao bota a nao clicado
