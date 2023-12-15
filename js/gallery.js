const URL = "http://localhost:3000/data"
const fotos = document.querySelector(".gallery__fotos")

fetch(URL)
    .then(response => {
        if (!response.ok){
            throw new Error('algo esta pasandoo')
        }      
        return response.json()
    })


    .then(data => {
        const galeria = data.map(item =>{

            const imagen = document.createElement("img");
            let rutaImagen = item.url
            imagen.src = rutaImagen
            console.log(imagen.src);
            return imagen;

        }) 
        
        fotos.append(...galeria);
        
    })
    .catch(error=> console.log('La hemos cagao'))




    // const URL = "http://localhost:3000/data";
    // const fotos = document.querySelector(".gallery__fotos");
    
    // fetch(URL)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('La respuesta de red no fue satisfactoria');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         // Utiliza map para crear un array de imágenes
    //         const imagenes = data.map(item => {
    //             const imagen = document.createElement("img");
    //             imagen.src = item.imagen;
    //             return imagen;
    //         });
    
    //         // Agrega las imágenes al contenedor
    //         fotos.append(...imagenes);
    //     })
    //     .catch(error => {
    //         console.error('Hubo un problema con la operación de obtención:', error);
    //         // Puedes manejar el error de una manera específica si lo necesitas
    //     });
    
