console.log("heloow");
//captura referencias do DOM
const eP = document.querySelector("p");
const eButton = document.querySelector("button");

function mudaTexto(){
    eP.innerText = "Ok,Funcionou! ";
}
function ouvinteClick(event){
    console.log("OuvinteClick");
    mudaTexto();
}
eButton.addEventListener("click", ouvinteClick);
//mudaTexto();