


    alert(`ola um novo jogador, interessante`)

    let nome = prompt(`qual seu nome`)
    alert(`bem vindo ao
     mundo onde 
    o lagarto gamer 
    controla 
    tudo.
    voce tem uma 
    chance para 
    superalo em 
    responder
     prtguntas, 
     mais cuidado 
    voce tem sete 
    vidas 
    em cada jogo 
    se perdelas 
    acabou!`)

//container 1

console.log
const numerosecreto = 10
let vidas = 7

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
        document.getElementById("resposta1").innerHTML = (`paraben voce acertou!!`)
        document.getElementById(`resposta1`).style.color = "green"
    } else if (vidas <= 0) {
        document.getElementById("resposta1").innerHTML = (`suas vidas acabaram, infelismente nao tem mais oque fazer`)
        document.getElementById(`resposta1`).style.color = "red"
    }
}

//jogo tabada
let a = match.round(Math.roundom() * 10)
let b = match.round(match.roundom() * 10)

function tabuada() {
    const resposta = document.getElementById("tentativ tabuada").value
    console.log(resposta);
}

//jogo de adivinhçao

const numerosecreto = match.round(match.random() * 20);
console.log(numerosecreto);
let vidas = 5;
function adivinhar()
{}
    
    


