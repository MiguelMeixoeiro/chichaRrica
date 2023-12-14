function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character"); //API personajes
    results
        .then(response => response.json()) //convierte la respuesta a JSON
        .then(data => {
            done(data)
        })
        .catch('Hay un error')
}

getCharacters(data => {
    const main = document.querySelector("main");
    data.results.forEach(personaje => { 
        console.log(personaje)
        //Cambiamos el color del texto dependiendo del status
        const statusClass = personaje.status === 'Alive' 
        ? 'alive' 
        : personaje.status === 'Dead' 
        ? 'dead'
        :'unknown';
        

        const article = document.createRange().createContextualFragment(/*html*/`
        <article id="carousel-container">
        <div class="image-container">
            <img src="${personaje.image}" alt="Personaje">
        </div>
        <h2>${personaje.name}</h2>
        <span class="${statusClass}">${personaje.status}</span>
        <span>${personaje.gender}</span>
        <span>${personaje.origin.name}</span>
        <span>
        </article>

        
        
        `);

      

        main.append(article) //Agregamos el article al final del main
        
    });
    console.log(main)  
    
    
    let i=0
    
    for(i;i < 5; i++){
        console.log(data.results[i])
    }let


    // const article = document.querySelector('article');  // Reemplaza '.article' con tu selector correcto
    const buttonRight = document.getElementById('right');  // Reemplaza '.button' con tu selector correcto
    const buttonLeft = document.getElementById('left'); 

    let currentIndex = 0;

    function showCharacter(index) {
        // Lógica para mostrar el personaje en la posición 'index'
    }

    buttonRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % data.results.length;
        showCharacter(currentIndex);
    });

    buttonLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + data.results.length) % data.results.length;
        showCharacter(currentIndex);
    });

// Asumo que obtienes 'data' de algún lugar antes de este código
// getCharacters(data => {
//     // Tu lógica aquí
});





