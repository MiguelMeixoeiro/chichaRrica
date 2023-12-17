// Asumiendo que la API proporciona información de categoría en el campo 'category'
const URL = "http://localhost:3000/data";
const photos = document.querySelector(".gallery__fotos");
const buttonCategory = document.querySelector(".gallery__buttonCategory");
const containerSubCategory = document.querySelector(".gallery_filtersSubCategory");
const buttonSubCategory = document.querySelector(".gallery__buttonSubCategory");

let categories = []; // Almacena las categorías únicas

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Algo está pasando');
        }
        return response.json();
    })
    .then(data => {
        const galeria = data.map(item => {
            // Actualiza la lista de categorías
            if (!categories.includes(item.category)) {
                categories.push(item.category);
            }

            const image = document.createElement("img");
            let sourceImage = item.url;
            image.src = sourceImage;
            console.log(image.src);
            return image;
        });

        // Muestra los botones de categoría
        showCategoryButtons(categories);

        photos.append(...galeria);
    })
    .catch(error => console.log('La hemos cagado'));

// Muestra los botones de categoría
function showCategoryButtons(categories) {
    categories.forEach(category => {
        const button = document.createElement("button");
        button.textContent = category;
        button.addEventListener("click", () => filterByCategory(category));
        containerSubCategory.appendChild(button);
    });
}

// Filtra las imágenes por categoría
function filterByCategory(category) {
    const allImages = photos.querySelectorAll("img");
    allImages.forEach(image => {
        // Muestra u oculta las imágenes según la categoría
        if (image.dataset.category === category || category === "all") {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}
