const URL = "http://localhost:3000/data";
const photos = document.querySelector(".gallery__fotos");
const buttonCategory = document.querySelector(".gallery__buttonCategory");
const containerSubCategory = document.querySelector(".gallery_filtersSubCategory");
const buttonSubCategory = document.querySelector(".gallery__buttonSubCategory");

// Variables para la paginación
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

// Almacenar datos obtenidos de la API
let data;

// Muestra la API
fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Algo está pasando");
    }
    return response.json();
  })
  .then((responseData) => {
    data = responseData;
    const galeria = data.map((item) => {
      const image = document.createElement("img");
      let sourceImage = item.url;
      image.src = sourceImage;
      image.dataset.price = item.price;

      image.addEventListener("click", function () {
        showModal(item);
      });

      return image;
    });

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
}

// Obtén referencias a los elementos del modal
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const closeModal = document.querySelector(".close");

// Manejador de clic en una imagen
photos.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    modal.style.display = "block";
    modalImage.src = event.target.src;

    const dataIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
    const selectedData = data[dataIndex];

    modalTitle.innerHTML = `<h2>${selectedData.title}</h2>`;
    modalPrice.innerHTML = `<p>${selectedData.price}</p>`;
    currentIndex = dataIndex;
  }
});

// Manejador de clic en el botón de cierre
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
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
  if (currentIndex < data.length - 1) {
    currentIndex++;
    showModal(data[currentIndex]);
  }
}

// Botones filtros
buttonCategory.addEventListener("click", function () {
  if (buttonSubCategory.style.display === "block") {
    buttonSubCategory.style.display = "none";
    hideAllButtons(containerSubCategory);
  } else {
    buttonSubCategory.style.display = "block";
    showAllButtons(containerSubCategory);
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

//Filtrar API por subcategorías -------------------------------------------------------------------------
    
document.addEventListener('DOMContentLoaded', function() {
    
    const buttons = document.querySelectorAll('.buttonSubCategory'); //botones subcategoria
    const galleryFotosElement = document.querySelector('.gallery__fotos')

    
    buttons.forEach(button => {
        button.addEventListener('click', function(event) { //creamos un evento
        
        // console.clear()
        const keyword = event.currentTarget.getAttribute('data-keyword'); //cogemos el valor del boton sobre el que hemos hecho clic
            
        fetch(URL)
          .then(response => response.json())
          .then(data => {
            
            const matchingItems = data.filter(item => item.keyword === keyword);
            // Usamos la funcion filter para crear un nuevo array (filterItems) que contiene los elementos del array original cuyo campo 'keyword' coincide con la keyword del boton

            if (matchingItems.length > 0) { //comprueba si hay coincidencias
              console.log('Resultados para', keyword, ':', matchingItems);
              showAllImages(matchingItems) //muestra las img en pantalla

            }             
          })
          .catch(error => console.error('Houston tenemos un problema:', error));
      });
    });

});
   
//Chuleta para mostrar los objetos del Array
 // for(let i=0; i < data.length; i++) { //recorre el array
            // //    console.log(data[i].keyword)
            //    if(data[i].keyword === `${personas}`){
            //     console.log(data[i])
            //    }
               
            // }




