(function () {
    function calculoIMC(peso, altura) {
        if (typeof peso != "number" || typeof altura != "number") {
            throw error = "Entre com 2 números"
        } else {
            if (isNaN(peso) || isNaN(altura)) {
                throw error = "Digite ambos os parâmetros"
            } else {
                let IMC = (peso / altura * altura)
                indiceIMC(IMC)
            }

        }

    }

    function indiceIMC(IMC) {
        if (IMC <= 16.9) {
            console.log("Muito abaixo do Peso")
        } else if (IMC >= 17 && IMC < 18.4) {
            console.log("Abaixo do Peso")
        } else if (IMC >= 18.4 && IMC < 24.9) {
            console.log("Peso Normal")
        } else if (IMC >= 25 && IMC < 29.9) {
            console.log("Acima do peso")
        } else if (IMC >= 30 && IMC < 34.9) {
            console.log("Obesidade Grau 1")
        } else if (IMC >= 35 && IMC < 40) {
            console.log("Obesidade Grau 2")
        } else {
            console.log("Obesidade Grau 3")
        }

    }
    console.log(calculoIMC(83, 1.78))
})()


