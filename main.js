const buttonAgain = document.querySelector('#buttonAgain')
const buttonTry = document.querySelector('#buttonTry')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let randomNumber = Math.round(Math.random() * 10)
var xAttempts = 0

buttonTry.addEventListener('click', handleClick)
function handleClick (event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value.length) == 0) {
        alert(`[ERRO] você precisa colocar um número para tentar.`)
    } else if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
        alert(`[ERRO] você não pode jogar o número: ${inputNumber.value}, o número tem que ser entre 0 e 10.`)
    } else if(Number(inputNumber.value) < 10 || Number(inputNumber.value) > 0 || Number(inputNumber.value.length) != 0) {
        xAttempts++
    }
    
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativas.`

    }
    inputNumber.value = ""
}

buttonAgain.addEventListener('click', playAgain)
function playAgain() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

document.addEventListener('keypress', enterScreen)
function enterScreen(event) {
    if(event.key == 'Enter' && screen1.classList.contains('hide')) {
        playAgain()
    }
}

function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}