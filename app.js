// Array para almacenar amigos
let amigos = [];
// Agregar un amigo

function agregarAmigo() {
    // Obtenido el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Valida que el campo no esta vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la función si está vacío
    }

    // Valido que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
    }

    // Agrega nombre al array
    amigos.push(nombreAmigo);

    // Limpia el campo de entrada
    inputAmigo.value = "";

    // Actualiza la lista en pantalla
    actualizarLista();
}
// Actualizar la lista en HTML
function actualizarLista() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpia la lista
    listaAmigos.innerHTML = "";

    // regresa sobre el array
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar el elemento a la lista
        listaAmigos.appendChild(li);
    }
}
// Mostrar los amigos
function mostrarAmigos() {
    for (let i = 0; i < amigos.length; i++) {
        console.log(amigos[i]);
    }
}
// Sortear un amigo
function sortearAmigo() {
    // Valida que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Crea un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obten el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML =
        `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}