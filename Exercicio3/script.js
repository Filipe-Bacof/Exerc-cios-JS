// Exercício 2 – Faça um programa que entre com cinco números e imprima o quadrado de cada número.
function verificarMaior(string1) {
    let string2 = string1.value;
    let string3 = string2.split(',');
    let maior = Math.max(...string3);
    if (string3.length < 5){
        document.getElementById("inserir-media").innerHTML = 'INSIRA MAIS NUMEROS!';
    } else if (string3.length > 5) {
        document.getElementById("inserir-media").innerHTML = 'TEM MAIS DO QUE 5 NUMEROS!';
    }else {
        document.getElementById("inserir-media").innerHTML = 'O MAIOR NÚMERO É: '+maior;
    }
}





// 1, 3, 5, 7, 8