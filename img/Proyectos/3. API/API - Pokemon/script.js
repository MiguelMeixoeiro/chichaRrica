    //Creamos 3 constantes  
    const abrir = document.getElementById('abrir');
    const contenedor = document.querySelector('.contenedor');
    const cerrar = document.getElementById('cerrar');

    const idAleatorio = Math.floor(Math.random() * 100) + 1; 
    const URL = `https://pokeapi.co/api/v2/pokemon-form/${idAleatorio}`;
    
    const pokemon = document.getElementById('pokemon')
    
    //Al hacer clic en abrir...
    abrir.addEventListener('click', function() {
        console.log(open)
        contenedor.style.display = 'block'; //Me muestra el contenedor
        abrir.style.display = 'none';//Me oculta abrir
    });

    //Al hacer clic en cerrar...
    cerrar.addEventListener('click', function() {
        console.log(close)
        contenedor.style.display = 'none';//Me oculta el contendor
        abrir.style.display = 'block';//Me muestra abrir
   
    });

    
    
    fetch(URL)
            .then(response => response.json())
            .then((json) => {

                const imagen = document.createElement("img");
                imagen.src = json.sprites.front_shiny;
                pokemon.append(imagen)
                console.log(imagen)
                
                const p = document.createElement("p");
                p.textContent = json.name;
                pokemon.append(p);
                console.log(p);

                
                const div = document.createElement("div");
                if (json.types && Array.isArray(json.types)){

                    const typeNames = json.types.map(type => type.type.name);
                    div.textContent = typeNames.join('');
                    pokemon.append(div);
                    console.log(div)
                }


            })
            .catch(error => {
                console.log('La hemos cagao')
            })
       
       
    
    


