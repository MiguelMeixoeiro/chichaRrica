function getAllCharactersForEach(done) {
    const results = fetch('https://rickandmortyapi.com/api/character')
    results.then(response => response.json())
           .then(data => done(data))
           .catch(error => console.log('Error fetching data:' + error));     
};

getAllCharactersForEach((data) => {
    let personajes = data.results;

    const prevBtn = document.getElementById('carouselLeft');
    const nextBtn = document.getElementById('carouselRight');
    const carouselContainer = document.querySelector('main');
    let currentIndex = 0;


    const updateCarousel = () => {
        carouselContainer.innerHTML = '';

        const currentPictures = personajes.slice(currentIndex, currentIndex + 5);

        currentPictures.forEach( personaje => {
            const statusClass = personaje.status === 'Alive' ? 'alive' : personaje.status === 'Dead' ? 'dead' : 'unknow'; 
            
            
            const carouselItem = document.createElement('div');
            //carouselItem.classList.add('carousel-item'); //this line is useless because I do not have a carousel-item class in CSS
            carouselItem.innerHTML = 
                `
                    <article id="carousel-container">
                    <div class="image-container">
                        <img src="${personaje.image}" alt="Personaje">
                    </div>
                    <h2>${personaje.name}</h2>
                    <span class="${statusClass}">${personaje.status}</span>
                    <span>${personaje.gender}</span>
                    <span>${personaje.origin.name} </span>
                    </article>
                `
            carouselContainer.appendChild(carouselItem);
        });

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + 5 >= personajes.length;
    };

    prevBtn.addEventListener('click', () => { //Izq
        if(currentIndex > 0) {
            currentIndex -= 1;
            updateCarousel();
        };
    })

    nextBtn.addEventListener('click', () => { //Drcha
        if(currentIndex + 5 < personajes.length) {
            currentIndex +=1;
            updateCarousel();
        }
    });
    updateCarousel();
});