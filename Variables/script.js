//CONSTANTES - Siempre en mayusculas

const NAME = 'Carlos Feria';
console.log(NAME);
// NAME = 'Fortich';
// console.log(NAME);

var variable1;
var variable2 = 0;
console.log (variable1 + variable2);
variable1 = 10;
console.log (variable1 + variable2);
variable2 = 20;
console.log (variable1 + variable2);

let v1;
let v2 = 0;
console.log(v1 + v2);
let verdadero = true;

if(verdadero){

    let varLet = 3;
    var varVar = 'Hola';

    for (let i = 0; i < 5; i++) {
        v1 = v1+1;
        v2+= varLet;
        console.log(varLet);
    }
    //varLet = i; Error
    console.log(varLet);
}

console.log(v1, v2);
console.log(varVar);
//console.log(varLet); Genera error

variable1 = 'Este es el tipo de la segunda variable ';
console.log(variable1 + typeof(variable2));
variable2 = 'Ahora el tipo de dato es ';
console.log(variable2 + typeof(variable2));
console.log(typeof(hola));

let v3;
let v4 = 'Este es el valor de v3 ';
console.log(v4 + v3);

v3 = 10;
console.log(v4 + v3);
v4 = '10';
console.log(v4 + v3);
console.log('Este valor: ' + v3 + " fue concatenado con signo + y comilla \' simple y \" doble");
console.log(`Este valor: ${v3} fue concatenado con signo $ y \` comilla inversa`);

//alert(`Hola ${NAME} \r\n\nEspero que estes bien`);

let arreglo1 = [23, 'Hola soy ', NAME, ' y tengo '];
console.log(arreglo1);
console.log(arreglo1[1] + arreglo1[2] + arreglo1[3] + arreglo1[0]);

let arreglo2 = new Array(1, 2, 3);
console.log(arreglo2);

let arreglo3 = [];
arreglo3[1] = 3;
arreglo3[4] = true;
console.log(arreglo3);

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array OPERACIONES DE ELEMENTOS DE ARRAY

