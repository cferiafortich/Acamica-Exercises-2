// Condiciones IF (https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_l%C3%B3gicos)

let v1 = true;
//v1 = false;
if(v1)
    console.log('El resultado v1 es ' + v1);

let n1 = 10;

if(n1==='10')
    console.log('El valor es igual a 11');
else
    console.log('El valor no es igual a 11, es '+ n1);


let mensaje = n1<11 ? 'El valor es menor a 11':'El valor es mayor a 11, es '+n1;
console.log(mensaje);

mensaje = n1>11 ? 'El valor es mayor a 11':'El valor es menor a 11, es '+n1;
console.log(mensaje);

if(n1!=10){
    let mensaje = 'El numero es diferente de 10';
    console.log(mensaje);
}else{
    let mensaje = 'El numero es igual a 10';
    console.log(mensaje);
}

console.log(mensaje);

// SWITCH

let comparacion;
try{
    comparacion = prompt('Escriba el numero con letras').toLowerCase();
}catch(err){
    console.error(err);
    comparacion = 'uno';
}

switch (comparacion) {
    case 'uno':
        mensaje = 'Caso 1';
        console.log(mensaje);
        break;
    case 'dos':
        mensaje = 'Caso 2';
        console.log(mensaje);
        break;
    case 'tres':
        mensaje = 'Caso 3';
        console.log(mensaje);
        break;

    default: 
        console.log('No hay coincidencia');
        break;
}
try {
    console.log('Try con exito');
    throw new Error ('genere un error');
} catch (error) {
    console.error(error);
}

//CICLOS

for (let i = 2; i < 5; i++)
    console.log (i); 


for (let i = 10; i > 11; i--){
    console.log (i);
}
let cont = 0;
while (cont < 5) {
    console.log(cont);
    cont++;
}

do {
    console.log(cont);
    cont--;
} while (cont>0);

let frutas = new Array('banano', 'manzana', 'mango');
frutas.forEach((element, pos)=>{
    console.log(`elemento ${element} en la posicion ${pos}`);
});

function imprimirElemento(e,i,a){
    console.log(`elemento ${e} en la posicion ${i}`);
    console.log(a);
}
frutas.forEach(imprimirElemento);