let availableBalance = 0
const displayBalance = document.getElementById("saldo-exibido")
const buyButtons = document.getElementsByClassName("buy-btn")
const inputBalance = document.getElementById("saldo")

function mostrarSaldo() {
    const balance = parseFloat(inputBalance.value)

    if (balance > 0) {
        availableBalance = balance
        displayBalance.innerText = "Seu saldo disponível: R$ " + availableBalance.toFixed(2)
    } else {
        displayBalance.innerText = "Por favor, insira um saldo válido."
    }
}



