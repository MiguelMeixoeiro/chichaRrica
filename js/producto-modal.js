// //Función para el modal

// function callModal(){
//     var modal = document.getElementById("modal");
  
//     if (modal.style.top === "0px") {
//           modal.style.top = "-700px";
//       } else {
//           modal.style.top = "0px";
//       }
//   }
  
//   function closeModal(){
//     var closeModal = document.getElementById("modal");
//   modal.style.top = "-700px";
  
//   }


// Fetch para llamar a la API local
fetch ('http://localhost:3000/data')
 .then(data => data.json())
 .then(res => console.log(res))

 function showProductDetails(product) {
  // Puedes implementar la lógica para mostrar los detalles del producto aquí
  // Por ejemplo, abrir un modal con la información del producto
  const modalContent = `
    <h2>${product.title}</h2>
    <p>Precio: ${product.price}</p>
    <p>Descripción: ${product.url}</p>
    <!-- Agrega más información según sea necesario -->
  `;

  showModal(modalContent);
}

function showProductDetails(product) {
  // Crear un elemento de modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  // Contenido del modal
  modal.innerHTML = `
    <div class="modal-content" style="background-color: #D5D8DC; width: 50%; height:50vh; align-items: center; display:flex; flex-direction:row;">
      <span class="close">&times;</span>
      <img  style= "margin-left: 4vh;" src="${product.url}" alt="${product.title}">
      <div class="product-info">
      <!-- Aquí irá la información del producto -->
      <h2 style="font-weight: bold; font-size: 20px; color: black; margin-left:14vh;">${product.titlel}</h2>
      <p style="font-weight: bold; font-size: 20px; color: black; margin-left:14vh;">Precio: ${product.price} €</p>
    </div>
    </div>
  `;
  
  // Agregar el modal al cuerpo del documento
  document.body.appendChild(modal);
  
  // Añadir evento clic al botón de cerrar
  const closeButton = modal.querySelector('.close');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal); // Cerrar el modal al hacer clic en el botón de cerrar
  });

  // Puedes personalizar el estilo del modal según tus necesidades
  modal.style.display = 'block';
}
// const photoContainer = document.querySelector(".photo-container")

// //Funcion para buscar objetos
// function fetchPhoto(id) {
//   fetch ('http://localhost:3000/data')
//   .then(data => data.json())
//   .then(res => {
//     showPhoto(data)
//     console.log(res)
//   })
// }

// //Funcion representar 
// function showPhoto(photo) {
//   //Const que crea tarjeta modal
//   const card = document.createElement('div')
//   card.classList.add('photo-block')
//   //Dentro de tarjeta, div por cada img, en lista
//   const photoContainer = document.createElement('div')
//   photoContainer.classList.add('photo-container')
//   //
//   const url =document.createElement('img')
//   url.src =api.url


//  //Ahora los numeros, que vamos a llamar directamente del json usando ids
//  const number = document.createElement('p')
//  number.textContent = `#${api.id.toString().padStart(3, 0)}`  //El $busca llamar los numeros por id(propiedad del json), "toString" hace que se pase a una cadena de texto, "padStart" lo que hace es especificar como es el contador[rellenar el principio de una cadena con un conjunto específico de caracteres hasta alcanzar una longitud determinada. sintax es padStart(longitud, relleno)], en este caso, de 3 digitos max, y con un 0 al principo

//  //Similar al de los numeros, uno para los nombres, usando los nombres de las propiedades del json
//  const keyword = document.createElement('p')
//  keyword.classList.add('keyword')
//  keyword.textContent = api.keyword

// //Todo esto que hemos creado lo vamos a añadir como uno a la tarjeta, en orden
// card.appendChild(photoContainer)
// card.appendChild(number)
// card.appendChild(keyword)

// //Y luego añadirlo todo al contenedor principal del principio, el que llama al DOM
// photoContainer.appendChild(card)

// }