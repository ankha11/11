alert(`ola um novo jogador, interessante`)

let nome = prompt(`qual seu nome`)
alert(`bem vindo ao
 mundo onde 
o lagarto gamer 
controla 
tudo.
voce tem uma 
chance para 
supera-lo em 
responder
 pertguntas, 
 mais cuidado 
voce tem sete 
vidas 
em cada jogo 
se perdelas 
acabou!`)

//container 1


const numerosecreto = Math.round(Math.random() * 10);
let vidas = 7;
console.log(vidas);
console.log(numerosecreto);

function adivinhar() {

    let tentativa = document.getElementById(`plane1`).value;
    console.log(tentativa);

    vidas--
    if (tentativa > numerosecreto) {
        document.getElementById("resposta1").innerHTML = (`nao o numero é menor, tente novamente`)
    } else {
        document.getElementById("resposta1").innerHTML = (`nao o numero é maior, tente novamente`)
    }

    console.log(vidas);

    if (tentativa == numerosecreto) {
        document.getElementById("resposta1").innerHTML = (`parabens voce acertou!!`)
        document.getElementById(`resposta1`).style.color = "green"
    } else if (vidas <= 0) {
        document.getElementById("resposta1").innerHTML = (`suas vidas acabaram, infelismente nao tem mais oque fazer`)
        document.getElementById(`resposta1`).style.color = "red"
    }
}

//jogo tabuada
let a = 0;
let b = 0;
let resultadoTabuada = 0;

function resetTabuada() {

    a = Math.round(Math.random() * 10)
    b = Math.round(Math.random() * 10)
    resultadoTabuada = a * b;
    console.log(a + " x " + b + " = " + resultadoTabuada)
    document.getElementById("calculo").innerHTML = a + " x " + b + " = "
    document.getElementById("resposta2").innerHTML = ("sua resposta aparecera aqui")
}

resetTabuada();

function tabuada() {
    const resposta = document.getElementById("plane2").value;
    if (resposta == resultadoTabuada) {
        document.getElementById("resposta2").innerHTML = "parabens você acertou! ";
        document.getElementById(`resposta2`).style.color = "green"
    } else {
        document.getElementById("resposta2").innerHTML = ("voce errou a resposta tente novamente")
    }
}

//equaçao

let num1 = Math.round(Math.random()*10);
let num2 = Math.round(Math.random()*10)
let operador = Math.round(Math.random()*3)

switch (operador){
    case  0:
       operador = "+";
       resposta4 = num1+num2;
       break;
    case 1:
        operador = "-"
        resposta4 = num1 - num2
        break;
    case 2:
        operador = "/";
        resposta4 = num1 / num2;
        break;
    case 3:
        operador = "*"
        resposta4 = num1 * num2
        break    
}
console.log(num1 + operador + num2 + "+" + resposta4)
