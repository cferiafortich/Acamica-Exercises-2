let titulo = document.getElementById('titulo');
titulo.textContent = 'Abre los resultados en la consola';

function alertFunct(){
    alert("Usted dio click en el h1");
}


titulo.addEventListener('click', ()=>{alert("Usted dio doble click")}, true);

titulo.addEventListener('click', ()=>{alert("Usted dio click 3 veces")});

titulo.addEventListener('click', alertFunct, true);

titulo.addEventListener('mouseover', (event)=>{
    console.log(event);
});

titulo.addEventListener('mouseleave', function(){
    //titulo.classList.add('in');
    titulo.classList.toggle('in');
})

let botonBorrar = document.getElementById('borrar');

botonBorrar.addEventListener('click', ()=>{
    console.log(contenedor.innerHTML);
    contenedor.innerHTML = '';
})

let contenedor = document.getElementById('contenedor');

let boton = document.getElementsByTagName('button') [0];
boton.addEventListener('click', ()=>{
    let span = document.createElement('span');
    span.textContent = 'Texto agregado dinamicamente';
    span.id = Date.parse(Date());
    let div = document.createElement('div');
    div.classList.add('on');
    div.appendChild(span);
    //boton.insertAdjacentElement('afterend', div);
    contenedor.insertAdjacentElement('afterbegin', div);
    contenedor.innerHTML += `<div class="on"><span id='${Date.parse(Date())}'>Texto agregado dinamicamente 1</span></div>`;
});
