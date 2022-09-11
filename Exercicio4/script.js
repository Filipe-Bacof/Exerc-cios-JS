// Exercício 4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.
let html = '';
let array = [];
let xxx = 0;
function adicionarIdade(idade) {
    if (idade.value == ''){
        idade.value = 0;
    }
    console.log(idade.value);
    html = html+'idade '+(xxx+1)+': '+idade.value+"<br>";
    let valor = idade.value;
    array[xxx] = parseFloat(valor);
    xxx = xxx+1;
    document.getElementById('campo-idade').value = '';
    document.getElementById("campo-idades-novas").innerHTML = html;
}

function calcular() {
    if(array.length == 0){
        document.getElementById("inserir-resultado").innerHTML = "Não tem nenhuma idade inserida"
    }else {
    let total = 0;
    for (xxx = 0; xxx < array.length; xxx++){
        if (array[xxx]>=18) {
            total = total + 1;
        }
    }
    document.getElementById("inserir-resultado").innerHTML = "Quantidade de MAIORES de idade: "+total+"<br>Quantidade de MENORES de idade: "+(array.length-total);
    }
}

function botao (valor) {
    let lugar = document.getElementById('campo-idade');
    lugar.value = valor;
    adicionarIdade(document.getElementById('campo-idade'))
}