let elementoButton = document.querySelector("#clickButton");
//estado inicial da imagem é false, sem cor
let estadoImagem = false; 
elementoButton.addEventListener('click', trocaImagem);

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

// se tiver clicado bota essa img, se nao bota essa
// if () src="./ice-cream.png"