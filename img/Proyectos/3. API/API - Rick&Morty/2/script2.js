// Función para obtener un número aleatorio dentro de un rango
function obtenerNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (20 - min + 1)) + min;
}

// Función para mostrar un personaje aleatorio
function mostrarPersonajeAleatorio() {
    const idAleatorio = obtenerNumeroAleatorio(1, 20); // Suponiendo que hay 671 personajes en la API

    fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`)
        .then(res => res.json())
        .then(response => {
            const personajeDiv = document.getElementById("personaje");

            personajeDiv.innerHTML = `
                <p>Nombre: ${response.name}</p>
                <p>Especie: ${response.species}</p>
                <img src="${response.image}" alt="${response.name}">
            `;
        })
        .catch(error => {
            console.log('Hay un error en el código');
        });
}

// Asigna la función al evento de clic del botón
document.getElementById("btnMostrar").addEventListener("click", mostrarPersonajeAleatorio);





   
    
    
