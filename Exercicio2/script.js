// Exercício 2 – Faça um programa que entre com cinco números e imprima o quadrado de cada número.
let html = '';
let array = [];
let xxx = 0;
function adicionarNumero(numero) {
    if (numero.value == ''){
        return;
    } else if (xxx < 4){
        html = html+'Número '+(xxx+1)+': '+numero.value+"<br>";
        let valor = numero.value;
        array[xxx] = parseFloat(valor);
        xxx = xxx+1;
        document.getElementById('campo-numero').value = '';
        document.getElementById("campo-numeros-novos").innerHTML = html;
    } else {
        html = html+'Número '+(xxx+1)+': '+numero.value+"<br>";
        let valor = numero.value;
        array[xxx] = parseFloat(valor);
        document.getElementById('campo-numero').value = '';
        document.getElementById("campo-numeros-novos").innerHTML = html;
        document.getElementById("escondido5").innerHTML = '';
        xxx = 0;
        let html2 = '';
        for (xxx = 0; xxx < array.length; xxx++){
            let quadrado = array[xxx] * array[xxx];
            html2 += `Número ${array[xxx]} elevado ao quadrado é = ${quadrado}<br>`;
        }
        document.getElementById("inserir-resultado").innerHTML = html2;
        document.getElementById("botoes").innerHTML = '';
        document.getElementById("limpar").style.marginLeft='306px';
    }
    
}
function botao (valor) {
    let lugar = document.getElementById('campo-numero');
    lugar.value = valor;
    adicionarNumero(document.getElementById('campo-numero'));
}