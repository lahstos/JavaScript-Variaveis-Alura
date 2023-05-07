//let x = "";
//console.log(x);
//x = "oi";


// DECLARAÇÃO DE FUNÇÃO

// 1) declara função

function imprimeTexto (texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("oi");
imprimeTexto("outro texto");
imprimeTexto(soma());

// três formas de escrever funções

function soma () {
    return 2 + 2;
}

// console.log (soma())