let estado = {
    cor: "#000000",
    altura: 0,
    largura: 0,
}

function criaElemento(cor, altura, largura){
    const eNovo = document.createElement("div");
    eNovo.textContent = `${cor} ${altura} ${largura} ${altura+largura}`;
    eNovo.style = `color: ${cor}`;
    document.body.appendChild(eNovo);
}
document.exm01.addEventListener("submit",//submitListener
(event) => { 
    event.preventDefault();
    estado.cor = document.exm01.cor.value,
    estado.altura = Number(document.exm01.altura.value),
    estado.largura = Number(document.exm01.largura.value)
    criaElemento(estado.cor,estado.altura,estado.largura);
    
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