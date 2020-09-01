let i = 0;
var sumaTotal = 0;
let prom = 0;
while (i<5) {
    var sum = parseFloat(prompt('Ingrese el valor: '));
    sumaTotal = sumaTotal + sum;
    console.log('El total es: ' + sumaTotal);
    i++;
}

console.log('El promedio es: ' + (sumaTotal/i));

let mayores = 0;

do {
    var edad = parseFloat(prompt('Ingrese la edad: '));
    if(edad > 18){
        mayores = mayores + 1;
    }
} while (edad != 0);

console.log('La cantidad de mayores es: ' + mayores);
