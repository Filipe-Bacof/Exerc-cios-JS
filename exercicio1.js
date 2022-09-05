// Exercício 1 – Calcule a média de diversas notas digitadas pelo usuário.
let html = '';
let array = [];
let xxx = 0;
function adicionarNota(nota) {
    if (nota.value == ''){
        nota.value = 0;
    }
    console.log(nota.value);
    html = html+'nota '+(xxx+1)+': '+nota.value+"<br>";
    let valor = nota.value;
    array[xxx] = parseFloat(valor);
    xxx = xxx+1;
    document.getElementById('campo-nota').value = '';
    document.getElementById("campo-notas-novas").innerHTML = html;
}
function calcular() {
    if(array.length == 0){
        document.getElementById("inserir-media").innerHTML = "Não tem nenhuma nota inserida"
    }else {
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total = total + array[i];
    }
    let media = total / array.length;
    document.getElementById("inserir-media").innerHTML = "A média é: "+ media+"<br>Media feita com o total de "+array.length+" notas";
    if (media >= 7) {
        document.getElementById("inserir-aprovado").innerHTML = "<br>APROVADO!";
        document.getElementById("inserir-aprovado").style.color = '#080'
    }else{
        document.getElementById("inserir-aprovado").innerHTML = "<br>REPROVADO!";
        document.getElementById("inserir-aprovado").style.color = '#F00'
    }
    }
}
function botao (valor) {
    let lugar = document.getElementById('campo-nota');
    lugar.value = valor;
    adicionarNota(document.getElementById('campo-nota'))
}