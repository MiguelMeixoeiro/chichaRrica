// DARLE LIKE AL CORAZON
console.log('conectado')
document.addEventListener('DOMContentLoaded', function() { // Para asegurarnos que el script se ejecuta despues de que cargue el DOM
    const heartIcon = document.getElementById('heartIcon');
    const likeCount = document.getElementById('likeCount');
    const heartIcon2 = document.getElementById('heartIcon2');
    const likeCount2 = document.getElementById('likeCount2');
    let likes = 0;
    let isLiked = false;
    
    //BOTON 1
    heartIcon.addEventListener('click', function (){
        if (!isLiked) {
            likes++;
            likeCount.textContent = likes;
            heartIcon.classList.add('red');
            isLiked = true;
        } else {
            likes--;
            likeCount.textContent = likes;
            heartIcon.classList.remove('red');
            isLiked = false;
        }
    });

    //BOTON 2
    let isLiked2 = false; // Usar una variable diferente para el segundo botón

    heartIcon2.addEventListener('click', function (){
        if (!isLiked2) {
            likes++;
            likeCount2.textContent = likes;
            heartIcon2.classList.add('red');
            isLiked2 = true;
        } else {
            likes--;
            likeCount2.textContent = likes;
            heartIcon2.classList.remove('red');
            isLiked2 = false;
        }
    });
});








//     // Forma 2 de hacerlo sin contador
//     heartIcon.addEventListener('click', function () {
//         if (!heartIcon.classList.contains('red')){ 
//     // Si !heartIcon.classList.contains('red') es 'true' se ejecuta el if
//             heartIcon.classList.add('red');
//         }else{
//     //Si es 'false' la clase 'red' se elimina
//             heartIcon.classList.remove('red');
//         }
//     });


    
// //Forma 3 de hacerlo sin contador
//     heartIcon2.addEventListener('click', function () {
//         heartIcon2.classList.toggle('red');
//     });
// })