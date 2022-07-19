//Busca uma referência para o todos elementos
const eValor = document.querySelector("span");

const eButton = document.querySelectorAll("button");
const eButtonPar = eButton[0];
const eButtonImpar = eButton[1];

const eList = document.querySelectorAll("ul");
const eListPar = eList[0];
const eListImpar = eList[1];

//Opera os dados

eButtonPar.addEventListener("click", (event) =>{
  console.log("Par");
  criaElemento(eListPar);
});

/*
mesma coisa event => e (event) =>, quando tem mais de um parametro deve usar parenteses

eButtonPar.addEventListener("click", event =>{
  console.log("Par");
  criaElemento(eListPar);
});
*/
eButtonImpar.addEventListener("click", (event) => {
    console.log("Impar");
    criaElemento(eListImpar);
});

function sorteiaValor() {
  const novoNumero = Math.floor(Math.random() * 10);
  eValor.textContent = novoNumero;
}

function criaElemento(lista) {
  const eLi = document.createElement("li");
  eLi.textContent = eValor.textContent;
  lista.appendChild(eLi);
  sorteiaValor();
}

/*
Outro jeito de fazer o Opera dos Dados
function ehParListerner(event) {
    console.log("Par");
    par();

}
function ehImparListerner(event) {
    console.log("Impar");
    impar();
}
function par() {
  const eLi = document.createElement("li");
  eLi.textContent = eValor.textContent;
  eListPar.appendChild(eLi);
  sorteiaValor();
}
function impar() {
  const eLi = document.createElement("li");
  eLi.textContent = eValor.textContent;
  eListImpar.appendChild(eLi);
  sorteiaValor();
}
*/