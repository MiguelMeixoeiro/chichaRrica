const URL = "http://localhost:3000/data";
const photos = document.querySelector(".gallery__fotos");
const buttonCategory = document.querySelector(".gallery__buttonCategory");
const containerSubCategory = document.querySelector(
  ".gallery_filtersSubCategory"
);
const buttonSubCategory = document.querySelector(".gallery__buttonSubCategory");

// Variables para la paginación
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

// Almacenar datos obtenidos de la API
let data;

// Muestra la API
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

      image.addEventListener("click", function () {
        showModal(item);
      });

            return image;


    photos.append(...galeria);
  })
  .catch((error) => console.log("La hemos cagado"));

// Función para mostrar el modal con el precio
function showModal(item) {
  modal.style.display = "block";
  modalImage.src = item.url;
  modalTitle.innerHTML = `<h2>${item.title}</h2>`;
  modalPrice.innerHTML = `<p>${item.price}</p>`;
  currentIndex = data.indexOf(item);

  // Oculta el nav con id "main-header"
  const mainHeader = document.getElementById("main-header");
  mainHeader.style.display = "none";
}

    // Obtén referencias a los elementos del modal
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const closeModal = document.querySelector(".close");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

// Manejador de clic en una imagen
photos.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    modal.style.display = "block";
    modalImage.src = event.target.src;

    const dataIndex = Array.from(event.target.parentNode.children).indexOf(
      event.target
    );
    const selectedData = data[dataIndex];

    modalTitle.innerHTML = `<h2>${selectedData.title}</h2>`;
    modalPrice.innerHTML = `<p>${selectedData.price}</p>`;
    currentIndex = dataIndex;
  }
});

// Manejador de clic en el botón de cierre
closeModal.addEventListener("click", function () {
  modal.style.display = "none";

  // Muestra nuevamente el nav con id "main-header"
  const mainHeader = document.getElementById("main-header");
  mainHeader.style.display = "block";
});

// Manejadores de clic en los botones de paginación
prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);

function showPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    showModal(data[currentIndex]);
  }
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

function hideAllButtons(container) {
  const buttons = container.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.display = "none";
  });
}

function showAllButtons(container) {
  const buttons = container.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.display = "block";
  });
}

function showAllButtons(container) { //funcion para mostrar todos los botones
    
    const buttons = container.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.display = 'block';
    });
}
    })
