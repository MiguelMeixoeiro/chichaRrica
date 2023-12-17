const URL = "http://localhost:3000/data"
const photos = document.querySelector(".gallery__fotos")
const buttonCategory = document.querySelector(".gallery__buttonCategory")
const containerSubCategory = document.querySelector(".gallery_filtersSubCategory")
const buttonSubCategory = document.querySelector(".gallery__buttonSubCategory")


//Muestra la API

fetch(URL)
    .then(response => {
        if (!response.ok){
            throw new Error('Algo esta pasandoo')
        }      
        return response.json()
    })


    .then(data => {
        const galeria = data.map(item =>{



            const image = document.createElement("img");//añadimos un img para cada foto
            let sourceImage = item.url //llamamos a la ruta de la imagen
            image.src = sourceImage //esto lo hacemos para dejarlo mejor anidado
            // console.log(image.src);

            // Añade un atributo personalizado para almacenar el precio en el elemento de imagen
            image.dataset.price = item.price;

            // Agrega un manejador de clic al elemento de imagen para mostrar el modal
        image.addEventListener("click", function() {
        showModal(item);
        });

            return image;


        }) 
        console.log(data[1].price);
        photos.append(...galeria);
        
    })
    .catch(error=> console.log('La hemos cagao'))


    // Función para mostrar el modal con el precio
    function showModal(item) {
        modal.style.display = "block";
        modalImage.src = item.url;
        modalTitle.innerHTML = `<h2>${item.title}</h2>`;
        modalPrice.innerHTML = `<p>${item.price}</p>`;
    }
    
    // script del modal y sus pagiinaciones

    // Obtén referencias a los elementos del modal
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const closeModal = document.querySelector(".close");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

        // Manejador de clic en una imagen
        photos.addEventListener("click", function(event) {
            if (event.target.tagName === "IMG") {
                // Muestra el modal
                modal.style.display = "block";
                // Establece la imagen en el modal
                modalImage.src = event.target.src;

                // Encuentra el índice de la imagen en los datos
                const dataIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
                const selectedData = data[dataIndex];
                

                // Genera el contenido del modal utilizando innerHTML
                modalTitle.innerHTML = `<h2>${selectedData.title}</h2>`;
                modalPrice.innerHTML = `<p>${item.price}</p>`;
            }
        });

        // Manejador de clic en el botón de cierre
        closeModal.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Manejadores de clic en los botones de paginación
        prevButton.addEventListener("click", showPrevImage);
        nextButton.addEventListener("click", showNextImage);

        function showPrevImage() {
            // Aquí debes implementar la lógica para mostrar la imagen anterior
        }

        function showNextImage() {
            // Aquí debes implementar la lógica para mostrar la siguiente imagen
        }



    //Botones filtros

buttonCategory.addEventListener("click", function() {
    console.log('category');

    
    if (buttonSubCategory.style.display === 'block') { //al hacer clic muestrame las categorias
        buttonSubCategory.style.display = 'none'; //al hacer clic de nuevo desaparecen
        hideAllButtons(containerSubCategory)

    } else {
        buttonSubCategory.style.display = 'block';
        showAllButtons(containerSubCategory)
    }
});

function hideAllButtons(container) { //funcion para esconder los botones
    
    const buttons = container.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.display = 'none';
    });
}

function showAllButtons(container) { //funcion para mostrar todos los botones
    
    const buttons = container.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.display = 'block';
    });
}




