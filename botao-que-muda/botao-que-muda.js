let clickButton = document.querySelector("#clickButton");
 
    clickButton.addEventListener('click', trocaImagem, false);

    function trocaImagem(){
        console.log('help')
        document.getElementById("trocar-img").src="ice-cream-click.png";
    }
