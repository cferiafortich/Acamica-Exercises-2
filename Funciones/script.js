function iniciarPrograma(dividirCero = true){
    console.log("Inicio el programa");
    let sum = suma(2,3);
    console.log(`El resultado de la suma es: ${sum}`);
    console.log('El resultado de la resta es: ' + resta(10,5));
//     resta = 'hola';
//     console.log('El resultado de la resta es: ' + resta);
//     console.log('El resultado de la resta es: ' + resta(10,5));
//     suma = 'chao';
//     console.log('El resultado de la resta es: ' + suma);
//     console.log('El resultado de la resta es: ' + suma(10,5));
    if (dividirCero)
        console.log("El resultado de la multiplicacion es: " + multiplicacion(sum,2));
    console.log("El resultado de la division por 0 es: " + division(sum, 0));
    console.log("El resultado de la division es: " + division(sum, 2));
    
}

function suma(n1,n2){
    return n1+n2;
}

let resta = function(n1,n2){
    return n1-n2;
}

let multiplicacion = (n1,n2) => n1*n2; //No hay que especificar el return porque solo hay una accion en la funcion

let division = (n1,n2) =>{
    if(n2 === 0){ 
        n2 = 1;
        return n1/n2;
    }
    return n1/n2;
}

// let fecha = function(dia,mm,aa){
//     return dia + mm + aa;
// }

let imprimirFecha = (fecha = new Date())=>{
    let f = new Date();
    switch (fecha) {
        case 'DD/MM/YYYY':
            return f.getDate() + '/' + f.getMonth() + '/' + f.getUTCFullYear();
        case 'MM/YYYY':
            return (f.getMonth()<10?'0'+ f.getMonth():f.getMonth()) + '/' + f.getUTCFullYear();
    
        default: 
            return fecha;
    }
}

(function(variable){
    console.log('Empezamos programa' + variable);
    iniciarPrograma();
    let fecha = imprimirFecha('DD/MM/YYYY');
    console.log('La fecha es: ' + fecha);
    fecha = imprimirFecha('MM/YYYY');
    console.log('La fecha es: ' + fecha);
    fecha = imprimirFecha('asdadqw');
    console.log('La fecha es: ' + fecha);
    fecha = imprimirFecha();
    console.log('La fecha es: ' + fecha);
    iniciarPrograma(false);
    let resultMultiplicacion = multiplicacionCallBack(3,2,suma);
    console.log('El resultado de la multiplicacion call back es: ' + resultMultiplicacion);
})(20);

function multiplicacionCallBack(n1, n2, callBack){
    let result = 0;
    for (let i = 0; i < n2; i++) {
        result = callBack(result,n1);
        
    }
    return result;
}

multiplicacionCallBack(
    1,
    5,
    (n1,n2)=>{
        console.log('El resultado es ' + n1 + ' y el primer numero es ' + n2);
        return (n1+n2)*n2;
    }
);

class Iphone{
    constructor(ram = 16,disco,pantalla){
        this.memoria_ram = ram;
        this.discoDuro = disco;
        this.pantalla = pantalla;
    }
    
    llamar(nombre){
        console.log('Vamos a llamar desde mi iPhone de ' + this.memoria_ram + ' y disco duro de ' + this.discoDuro + ' a ' + nombre);
    }
}

let iphone = new Iphone();
iphone.discoDuro = '120 GB';
iphone.llamar('Hola christian');