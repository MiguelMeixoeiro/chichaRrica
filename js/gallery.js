const URL = "http://localhost:3000/data"
const photos = document.querySelector(".gallery__fotos")
const buttonCategory = document.querySelector(".gallery__buttonCategory")
const containerSubCategory = document.querySelector(".gallery_filtersSubCategory")
const buttonSubCategory = document.querySelector(".gallery__buttonSubCategory")


//Muestra la API-----------------------------------------------------------------------------

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
            return image;


        }) 
        console.log(data[1].price);
        photos.append(...galeria);
        
    })
    .catch(error=> console.log('La hemos cagao'))


//Funcion para mostrar todas las imagenes
    function showAllImages(images) { 

        photos.innerHTML = ''

        images.forEach(item => {
           
            const imgElement = document.createElement('img');  // Crea un elemento img
                        
            imgElement.src = item.url;//coge la ruta de la imagen
        
            photos.appendChild(imgElement);// Añade la imagen como hijo de gallery__fotos
        })
        
      }
    


//Botones filtros categorías -----------------------------------------------------------

buttonCategory.addEventListener("click", function() {
    // console.log('category');

    
    if (buttonSubCategory.style.display === 'block') { //al hacer clic muestrame las categorias
        buttonSubCategory.style.display = 'none'; //al hacer clic de nuevo desaparecen
        hideAllButtons(containerSubCategory)

        fetch(URL)
            .then(response => response.json())
            .then(data => showAllImages(data))
            .catch(error => console.error('Houston tenemos un problema', error))
        

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
    
    const Allbuttons = container.querySelectorAll("button");
    Allbuttons.forEach(button => {
        button.style.display = 'block';
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




