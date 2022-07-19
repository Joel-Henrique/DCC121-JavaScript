//captura referencias do DOM
const eSpans = document.querySelectorAll("span");
const soma = document.querySelector("#soma");
const subtrai = document.querySelector("#subitrai");
const multiplica = document.querySelector("#multiplica");
const operacao = document.querySelector("#operacao");
const eA = eSpans[0];
const eB = eSpans[1];
const eS = eSpans[2];
const A = Number(eA.textContent);
const B = Number(eB.textContent);

function soma2(event){
    const S = A + B;
    eS.textContent = S;
    operacao.textContent = "A + B = " + eS.textContent;
}
function subtrai2(event){
    const S = A - B;
    eS.textContent = S;
    operacao.textContent = "A - B = " + eS.textContent;
}
function multiplica2(event){
    const S = A * B;
    eS.textContent = S;
    operacao.textContent = "A * B = " + eS.textContent;

}

soma.addEventListener("click", soma2);
subtrai.addEventListener("click", subtrai2);
multiplica.addEventListener("click", multiplica2);
