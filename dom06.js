console.log("heloow");
//captura referencias do DOM
const eP = document.querySelector("p");
const eButton = document.querySelector("buton");

function mudaTexto(){
    eP.innerText = "Ok,Funcionou! ";
}
function ouvinteClick(event){
    console.log("OuvinteClick");
}
eButton.addEventListener("click", ouvinteClick);
//mudaTexto();