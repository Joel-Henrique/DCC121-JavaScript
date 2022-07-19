let estado_cor;
let estado_altura;
let estado_largura;

function criaElemento(cor, altura, largura){
    const eNovo = document.createElement("div");
    eNovo.textContent = `${cor} ${altura} ${largura} ${altura+largura}`;
    eNovo.style = `color: ${cor}`;
    document.body.appendChild(eNovo);
}
document.exm01.addEventListener("submit",//submitListener
(event) => { 
    event.preventDefault();
    estado_cor = document.exm01.cor.value,
    estado_altura = Number(document.exm01.altura.value),
    estado_largura = Number(document.exm01.largura.value)
    criaElemento(estado_cor,estado_altura,estado_largura);
    
    //+document.exm01.altura.value,
    //+document.exm01.largura.value,
    document.exm01.rest();
});

/* function submitListener(event){ 
    event.preventDefault();
    criaElemento(
    document.exm01.cor.value,
    document.exm01.largura.value,
    document.exm01.altura.value,
);
    document.exm01.rest();
} */