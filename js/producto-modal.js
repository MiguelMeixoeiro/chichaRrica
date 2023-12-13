//Función para el modal

function callModal(){
    var modal = document.getElementById("modal");
  
    if (modal.style.top === "0px") {
          modal.style.top = "-700px";
      } else {
          modal.style.top = "0px";
      }
  }
  
  function closeModal(){
    var closeModal = document.getElementById("modal");
  modal.style.top = "-700px";
  
  }

// Fetch para llamar a la API local

fetch ('http://localhost:3000/data')
.then(data => data.json())
.then(res => console.log(res))