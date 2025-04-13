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

const carNames = [
    "TITANO RANCH TURBODIESEL AT 4X4",
    "TORO ULTRA TURBODIESEL 4x4 AT9",
    "STRADA ENDURANCE CABINE PLUS 1.3 FLEX",
    "PULSE AUDACE TURBO 200 HYBRID FLEX AT 4P",
    "ARGO 1.0 FLEX 4P",
    "MOBI TREKKING 1.0"
]

const carPrices = [205390, 128990, 92190, 119990, 84890, 74510]

function mostrarSaldo() {
    const balance = parseFloat(inputBalance.value)

    if (balance > 0) {
        availableBalance = balance
        displayBalance.innerText = "Seu saldo disponível: R$ " + availableBalance.toFixed(2)
    } else {
        displayBalance.innerText = "Por favor, insira um saldo válido."
    }
}

for (let i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function () {
            const nomeCarro = carNames[i]
            const preco = carPrices[i]

        if (availableBalance >= preco) {
            availableBalance -= preco
            displayBalance.innerText = "Seu saldo disponível: R$ " + availableBalance.toFixed(2)
            alert("Você comprou o carro:\n" + nomeCarro)
        } else {
            alert("Você não tem saldo suficiente para comprar este carro.")
        }
    })
}
