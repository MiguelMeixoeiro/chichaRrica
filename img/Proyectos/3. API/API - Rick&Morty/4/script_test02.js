function getAllCharactersFor(done) {
    const results = fetch('https://rickandmortyapi.com/api/character')
    results.then(response => response.json())
           .then(data => done(data))
           .catch(error => console.log('Error fetching data:' + error));     
};


getAllCharactersFor((data) => { //Funcion callback
    //Callback se ejecuta cuando se completa la solicitud y se reciben los datos
    const main = document.querySelector("main");
    const characters = data.results;
    
    const prevBtn = document.getElementById('carouselLeft'); // Izq
    const nextBtn = document.getElementById('carouselRight'); // Drcha

    let iterator = 0;

    const updateCarousel = () => {
        main.innerHTML='';
        //La posicion actual es 0 y quiero que me muestre 5 personajes
        for (let i = 0; i < 5; i++) {
            
            let character = characters[iterator + i];
            
            
            const statusClass = character.status === 'Alive' ? 'alive' : character.status === 'Dead' ? 'dead' : 'unknow';
    
            const article = document.createRange().createContextualFragment(//Añadimos el HTML
            `
                <article id="carousel-container">
                <div class="image-container">
                    <img src="${character.image}" alt="Personaje">
                </div>
                <h2>${character.name}</h2>
                <span class="${statusClass}">${character.status}</span>
                <span>${character.gender}</span>
                <span>${character.origin.name}</span>
                </article>
            `
            );
            main.append(article);
        }};
    
    nextBtn.addEventListener('click', () => { //Drcha
        // Hace un consumo de la API y muestra los 5 primeros personajes
        
        if (iterator === characters.length - 5){ 
            iterator = 0;
            updateCarousel();
        }
        else {
            iterator ++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => { // Izq
         // Hace un consumo de la API y muestra los 5 ultimos personajes
        if (iterator === 0) {
            iterator = characters.length -5;
            updateCarousel();
        }
        else{
            iterator --;
            updateCarousel();
        }
    });
    updateCarousel();
    
});


