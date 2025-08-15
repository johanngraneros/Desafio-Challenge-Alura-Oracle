Este proyecto es un juego simple de Amigo Secreto desarrollado con JavaScript, HTML y CSS. Permite agregar amigos a una lista, mostrar los nombres en la página, sortear un amigo secreto de forma aleatoria y reiniciar el juego.

El objetivo principal es practicar lógica de programación, manejo de arrays, validaciones de entradas y manipulación del DOM.

Funcionalidades

Agregar amigos a la lista: Se puede ingresar un nombre y agregarlo al array de amigos, validando que no esté vacío ni se repita.

Actualizar la lista de amigos en HTML: Cada vez que se agrega un amigo, se actualiza la lista visible en la página.

Sorteo aleatorio de un amigo secreto: Al hacer clic en “Sortear”, se selecciona un amigo de forma aleatoria y se muestra en pantalla.

Reiniciar el juego: Vacía la lista de amigos y el resultado mostrado, permitiendo empezar de cero.

Estructura del código
Variables globales
let nombresAmigos = []; // Array donde se guardan los nombres de los amigos

Funciones principales
validarEntrada(nombresSorteo)

Valida que el nombre ingresado no esté vacío.
Si el campo está vacío, muestra un alert y retorna false.

agregarAmigo()

Obtiene el valor del input.

Valida la entrada y evita duplicados en la lista.

Agrega el nombre al array nombresAmigos.

Limpia el input.

Actualiza la lista en HTML llamando a actualizarLista().

actualizarLista(nombresAmigos)

Limpia el contenido HTML de la lista.

Recorre el array nombresAmigos y agrega cada nombre como un <li> en la lista.

sortearAmigo()

Verifica que haya amigos en la lista; si no hay, muestra un alert.

Genera un índice aleatorio y selecciona un amigo de nombresAmigos.

Muestra el resultado en pantalla con el mensaje:

"El amigo secreto sorteado es [nombre]"

reiniciarJuego()

Limpia la lista de amigos en HTML.

Vacía el array nombresAmigos.

Limpia el resultado mostrado.

Cómo usarlo

Abrir el archivo HTML que contenga los inputs, botones y listas.

Ingresar nombres en el input y hacer clic en “Agregar amigo”.

Hacer clic en “Sortear amigo” para ver quién fue elegido.

Hacer clic en “Reiniciar juego” para comenzar de nuevo.
