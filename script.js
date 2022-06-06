function pegaNumero() {
    const primeiroValor = document.getElementById("primeiroValor").value;
    const segundoValor = document.getElementById("segundoValor").value;
    //primeiroValor.length retorna o tamanho da string
    console.log(primeiroValor)
    // IF = SE  ELSE = SENAO 
    // true ou false
    if (primeiroValor > segundoValor) {
        console.log("Maior")
    } else if(primeiroValor < segundoValor){
        console.log("Menor")
    }
    else {
        console.log("igual")
    }
}
function Tentativa(){
    const exampleString = document.
    getElementById("exampleString") .value.length;

    const exampleString02 = document.
    getElementById("exampleString02").value.length;
console.log(exampleString,exampleString02)

/*tentar aqui abaixo fazer a comparação deles*/

if (exampleString >exampleString02) {
    console.log("menor")
} else if(exampleString < exampleString02){
    console.log("maior")
}
else {
    console.log("igual")
}

}
/* essa será a parte de calculo de vida*/

function exibeData() {
    const homemIBGE = 73.1*30*12;
    const mulherIBGE = 80.1*30*12;
    const mesAtual = new Date().getMonth() + 1;
    const test = new Date().getUTCFullYear()
    const diaAtual = new Date().getDate();
    const anoAtual = new Date().getFullYear();
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    console.log(mesAtual, diaAtual, anoAtual)
    const dia = diaAtual - Number(document.getElementById("dia").value)
    const mes = mesAtual - Number(document.getElementById("mes").value)
    const ano = anoAtual - Number(document.getElementById("ano").value) 

    const idadeDias = ano * 365 + mes * 30 + dia;

    let tempoRestante;
    switch (sexo) {
        case "mulher":
            tempoRestante = mulherIBGE - idadeDias;
            console.log(tempoRestante)
            break;
        case "homem":
            tempoRestante = homemIBGE - idadeDias;
            console.log(tempoRestante)
            break;
    }
}
    
