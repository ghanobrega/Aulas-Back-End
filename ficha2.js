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

//indice(55,1.60);

function inverso(frase) {
    tamanho = frase.length;
    novafrase = "";
    for(i=tamanho-1;i>=0;i--) {
        novafrase += frase[i];
    }
    console.log(novafrase);
}

//inverso("Hoje e Domingo");

function vogais(frase) {
    tamanho = frase.length;
    vogais = ["a","e","i","o","u"];
    tamanhovog = vogais.length;
    contar = 0;
    for(i=0;i<=tamanho-1;i++) {
        for(x=0;x<=tamanhovog-1;x++) {
            if(frase[i] == vogais[x]) {
                contar = contar + 1;
            }
        }
    }
    console.log(contar);
}

//vogais("Quantas vogais tem");

function abc(frase,letra) {
    frase = frase.toLowerCase();
    tamanho = frase.length;
    contar = 0;
    for(i=0;i<=tamanho-1;i++) {
        if(frase[i] == letra) {
            contar = contar + 1;
        }
    }
    console.log(contar);
}

//abc("aAcimAaa","a");

function horas(entrada,saida) {
    entrada = new Date(2020,2,28,entrada,0,0);
    saida = new Date(2020,2,28,saida,0,0);
    calc = saida.getHours() - entrada.getHours();
    console.log(calc,"horas");
}

//horas(8,18);

function rectangulo(largura,altura) {
    console.log("Desenha rectangulos");
    console.log("Largura:",largura);
    console.log("Altura:",altura);
    for(i=0;i<=altura-1;i++) {
        line = "";
        for(x=0;x<=largura-1;x++) {
            line += "*";
        
        }
        console.log(line);
    }
}

//rectangulo(20,10);

function triangulo(altura) {
    console.log("Desenha triangulos");
    console.log("Altura:",altura);
    line = "";
    for(i=0;i<=altura-1;i++) {
        line += "*";
        console.log(line);
    }
}

//triangulo(10);

function caixas(lados) {
    console.log("Desenha triangulos");
    console.log("Lados:",lados);
    line = "";
    for(i=0;i<=lados-1;i++) {
        line += "*";
    }
    console.log(line);
    nespacos = lados - 2;
    interior = "";
    for(z=0;z<=lados-3;z++) {
        interior += " ";
    }
    ladoss = "*" + interior + "*"
    for(x=0;x<=lados-3;x++) {
        console.log(ladoss);
    }
    console.log(line);
}

//caixas(10);