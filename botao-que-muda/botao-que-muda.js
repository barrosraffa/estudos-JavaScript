let elementoButton = document.querySelector("#botaoSemClick");
//estado inicial da imagem é false, sem cor
let estadoImagem = false; 
let estadoBotao = false;
elementoButton.addEventListener('click', trocaImagem);
elementoButton.addEventListener('click', TrocaCorBotao);

// se não tiver clicado no botão não mude a img se clicar muda

    function trocaImagem(){
        console.log('help')
        let elementoImagem = document.getElementById("trocar-img")
        if(!estadoImagem){
            elementoImagem.src="ice-cream-click.png"
            estadoImagem = true;
        }
        else {
            elementoImagem.src="./ice-cream.png"
            estadoImagem = false;
        }
    }

    function TrocaCorBotao (){
        let elementoButton = document.getElementById("botaoSemClick")
        if(!estadoBotao){
            console.log('botao')
            elementoButton.classList.add('botao-com-click')
            estadoBotao = true;
        }
        else {
            elementoButton.classList.remove('botao-com-click')
            estadoBotao = false;
        }
    }

// se tiver clicado bota essa img, se nao bota essa