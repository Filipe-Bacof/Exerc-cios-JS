/* Exercício 5 – Crie um programa que entre com os
dados de altura e sexo de 5 pessoas. Imprima na tela
quantas pessoas são do sexo masculino e quantas pessoas
são do sexo feminino. Mostre também qual é a maior altura
e se essa altura é de um homem ou uma mulher. */

let valores = [1.50, 1.78, 1.80, 2.02, 1.95];
let generos = ['m', 'h', 'm', 'h', 'h'];

function retornarMaior() {
    let valorAlto = Math.max(...valores);
    console.log(valorAlto);
    let indexDoValor = valores.findIndex(function(item){
        return (item == valorAlto) ? true : false;
    });
    console.log(indexDoValor);

    console.log(generos[indexDoValor]);
}
