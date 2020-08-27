let botonIniciar = document.getElementById('inicio');
botonIniciar.addEventListener('click', init);

let contenedor = document.getElementById('contenedor');

function init(){
    fetch('https://dog.ceo/api/breeds/image/random').then((response)=>{
        console.log(response);
        response.json().then((resJson)=>{
            console.log(resJson);
            cargarImagen(resJson);
        });
    }).catch((err)=>alert('Error' + err));
}

let cargarImagen = function(resJson){
    if (resJson.status=='success'){
        let gif = document.createElement('img');
        gif.src = resJson.message;
        contenedor.insertAdjacentElement("afterbegin", gif);
    }
}

