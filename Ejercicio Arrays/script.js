let frutas = new Array('mango', 'banano', 'pera', 'manzana');
i=0;
while (i<frutas.length) {
    console.log(frutas[i]);
    i++;
}

console.log("El arreglo de frutas es: " + frutas);

let numeros = 0;
let cont = 0;
let numerosArreglo = new Array();
do {
    numeros = prompt('Ingrese los numeros: ');
    numerosArreglo[cont] = numeros;
    cont++;

    if (numeros == 'stop') {
        numerosArreglo.pop();
    }
} while (numeros != 'stop');

console.log(numerosArreglo);