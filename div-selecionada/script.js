let elementoDivSelect = document.querySelector("#div-select");
let elementoDivSelectImg = document.querySelector("#img-check")

let estadoDaDiv = false; 
let estadoDivSelectImg = false;
elementoDivSelect.addEventListener("click", selecionaDiv)

function selecionaDiv() {
    console.log("help")
    let elementoDivSelect = document.getElementById("div-select");

    if (!estadoDaDiv) {
        elementoDivSelect.classList.add("div-selecionada")
        elementoDivSelectImg.src="./assets/carraca.svg";
        estadoDaDiv = true;
        estadoDivSelectImg = true;
    }
    else {
        elementoDivSelect.classList.remove("div-selecionada");
        estadoDaDiv = false;
        estadoDivSelectImg = false;
    }
}