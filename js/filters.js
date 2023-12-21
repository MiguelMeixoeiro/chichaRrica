// filters.js

// Función para inicializar los filtros
export function initFilters(data) {
    const buttonCategory = document.querySelector(".gallery__buttonCategory");
    const containerSubCategory = document.querySelector(".gallery_filtersSubCategory");
    const buttonSubCategory = document.querySelector(".gallery__buttonSubCategory");
  
    // ... (resto de la lógica de los filtros)
  
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
  
    // ... (resto de tu código de filtros)
  }
  