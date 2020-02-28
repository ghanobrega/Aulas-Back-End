function indice(peso,altura) {
    imc = peso/(altura*altura);
    if(imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("No peso normal");
    } else if (imc >= 25 && imc < 30) {
        console.log("Acima do peso");
    } else {
        console.log("Obeso");
    }
}

indice(55,1.60);