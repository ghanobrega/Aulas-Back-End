function nota_final(val1,val2) {
    a = "aprovado";
    r = "reprovado";

    nota = (val1 + val2) / 2;

    resultado = nota >= 10 ? a : r;
    console.log(resultado);
}

nota_final(10,10);

function mes(mes) {
    meses = ["Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho", "Julho",
        "Agosto", "Setembro", "Outubro",
        "Novembro", "Dezembro"];
    exten = meses[mes-1];
    console.log(exten);
}

mes(3)

function mult() {
    a = "";
    b = 1;
    i= 1;
    while(b<15) {
        b = i*5;
        i=i+1;
        a=a+b+",";
    }
    console.log(a);
}

mult()

function soma() {
    i = 0;
    a = 0;

    while(i<=100) {
        a = a + i;
        i = i + 1; 
    }
    console.log(a);
}

soma()

function fatorial(val) {
    resultado = 1;
    for(i=1;i<=val;i++) {
        resultado *=i;
    }
    console.log(resultado);
}

fatorial(5)

function varias(array) {
    max = 0;
    for(i=0;i<=array.length;i++) {
        if(array[i]>max) {
            max = array[i];
        }
    }

    min = array[0];
    for(i=0;i<=array.length;i++) {
        if(array[i]<min) {
            min = array[i];
        }
    }

    media = 0;
    total = 0;
    for(i=0;i<array.length;i++) {
        total += array[i];
    }
    media = total / array.length
    console.log("Maximo =",max,"Minimo =",min,"Media =",media);
}

varias([2,1,10,18,5,200])