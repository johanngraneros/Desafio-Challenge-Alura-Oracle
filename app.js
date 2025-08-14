// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function validarEntrada(nombre) {
    if (nombre === "") {
        alert("Por favor, ingresa un nombre valido.");
        return false; // indica que no paso la validación
    }
    return true; // paso la validación
}


function agregarAmigo() {
    let nombresSorteo = document.getElementById('amigo').value
    
    if (!validarEntrada(nombre)) return; //Si el nombre no es valido, salgo de la funcion y no agrego nada a la lista.
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML += nombre + "<br>";
    document.getElementById('amigo').value = ""; //limpia el campo de texto después de agregar un nombre a la lista
}