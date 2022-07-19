const ehpar = document.querySelector("#par");
const ehimpar = document.querySelector("#impar");
const eUl = document.querySelectorAll("ul");
const test = document.querySelector("#testanumeros");
const pares=[];
const impar=[];
console.log(eUl[1].textContent);
function testanumero(event){
    for(let i =0;i<eUl.length;i++){
        if(eUl[i].textContent%2 == 0){
            pares.push(eUl[i].textContent);
        }else{
            impar.push(eUl[i].textContent);
        }
    }



    for(let i = 0;i<impar.length; i++){
        ehimpar.textContent += impar[i] + ",";
    }
    for(let i = 0;i< pares.length; i++){
        ehpar.textContent += pares[i] + "," ;
    }
}

test.addEventListener("click", testanumero);