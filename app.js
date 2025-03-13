// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaDeAmigosParaSortear = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');
let reiniciar = document.getElementById('reiniciar');
let reiniciarSorteo = document.getElementById('reiniciarSorteo'); // Nuevo botón

// Función para capturar nombres
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;

    if (amigos.includes(nombreDeAmigo)) {
        alert('No repetir nombre, usar segundo nombre de ser necesario.');
        return;
    }

    if (nombreDeAmigo === '') {
        alert('El campo está vacío, debe escribir un nombre.');
        return;
    }
    amigos.push(nombreDeAmigo);
    actualizarListaDeAmigos();
    limpiarCaja();
}

// Función para mostrar los nombres 
function actualizarListaDeAmigos() {
    listaDeAmigosParaSortear.innerHTML = '';
    for (var i = 1; i <= amigos.length; i++) {
        let nombreAgregado = document.createElement('li');
        nombreAgregado.textContent = ` ${amigos[i - 1]}`;
        listaDeAmigosParaSortear.appendChild(nombreAgregado);
    }
}

// Función para sortear el nombre
function sortearAmigo() {
    if (amigos.length >= 2) {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado.innerHTML = `El amigo sorteado es: ${amigos[amigoAleatorio]}.`;
    } else {
        alert('Debe añadir al menos dos nombres.');
    }
}

// Vaciado
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

// Reinicia el programa 
function nuevaLista() {
    if (amigos.length > 0) {
        location.reload();
        amigos = []; // Reinicia el array de amigos
    } else {
        alert('La lista se encuentra vacía.');
    }
}

// Función para reiniciar el sorteo y borrar los nombres
function reiniciarSorteoAmigos() {
    amigos = [];
    listaDeAmigosParaSortear.innerHTML = '';
    amigoSorteado.innerHTML = '';
}

// Event listener para el nuevo botón
reiniciarSorteo.addEventListener('click', reiniciarSorteoAmigos);