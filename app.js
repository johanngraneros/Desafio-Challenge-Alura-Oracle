// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = []

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

