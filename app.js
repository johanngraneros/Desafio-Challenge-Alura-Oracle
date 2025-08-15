// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [] //array con los nombres

function validarEntrada(nombresSorteo) {
    if (nombresSorteo === "") {
        alert("Por favor, ingresa un nombre valido.");
        return false; // indica que no paso la validación
    }
    return true; // paso la validación
}


function agregarAmigo() {
    let nombresSorteo = document.getElementById('amigo').value
    
    if (!validarEntrada(nombresSorteo)) return; //Si el nombre no es valido, salgo de la funcion y no agrego nada a la lista.
    
    nombresAmigos.push(nombresSorteo) //Agrego el nombre ingresado a la lista    
    
    document.getElementById('amigo').value = ""; //limpia el campo de texto después de agregar un nombre a la lista
}

function actualizarLista(nombresAmigos) {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; //limpio la lista existente para asegurarse de que no haya duplicados al actualizar
    
    for (let i = 0;i < nombresAmigos.length ; i++ ){ //el for funciona asi con 3 parametros for (INICIO; CONDICIÓN; ACTUALIZACIÓN) { // CUERPO: lo que se ejecuta en cada vuelta) }

        let nombre = nombresAmigos[i];          // saco el nombre actual del array
        listaAmigos.innerHTML += `<li>${nombre}</li>`;  // lo agrego a la lista HTML
   
    }
} 

function generarNombreSecreto() {
    if (nombresAmigos.length === 0) { //Valido si esta vacio o no
    alert("No hay amigos para sortear");
    return;
}
    let indiceNombreAleatorio =  Math.floor(Math.random() * nombresAmigos.length); //Generar un índice aleatorio
    let nombreGenerado  = nombresAmigos[indiceNombreAleatorio]; //Obtener el nombre sorteado:
 
    document.getElementById("resultado").innerHTML = nombreGenerado;
    }

function reiniciarJuego ( ){
    listaAmigos.innerHTML = ""; //reinicio la lista
}
