const URL = "http://localhost:3000/data"
const photos = document.querySelector(".gallery__fotos")
const buttonCategory = document.querySelector(".gallery__buttonCategory")
const containerSubCategory = document.querySelector(".gallery_filtersSubCategory")
const buttonSubCategory = document.querySelector(".gallery__buttonSubCategory")


//Muestra la API

fetch(URL)
    .then(response => {
        if (!response.ok){
            throw new Error('algo esta pasandoo')
        }      
        return response.json()
    })


    .then(data => {
        const galeria = data.map(item =>{

            const image = document.createElement("img");//añadimos un img para cada foto
            let sourceImage = item.url //llamamos a la ruta de la imagen
            image.src = sourceImage //esto lo hacemos para dejarlo mejor anidado
            console.log(image.src);
            return image;

        }) 
        
        photos.append(...galeria);
        
    })
    .catch(error=> console.log('La hemos cagao'))
    





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
