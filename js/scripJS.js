document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu__btn');
    const menuIcon = document.querySelector('.menu__icon');
    const navUl = document.querySelector('header nav ul');
    const sliderLateral = document.getElementById('sliderLateralContainer');
    const accesoLink = document.getElementById('sliderRojo');
    const logoPrincipal = document.getElementById('logoPrincipal'); // Asegúrate de que la ID coincida
    console.log(logoPrincipal);
    
    menuBtn.addEventListener('change', () => {
      if (menuBtn.checked) {
        navUl.classList.add('show');
      } else {
        navUl.classList.remove('show');
      }
    });
  
    // Cierra el menú cuando se hace clic en un enlace
    navUl.addEventListener('click', () => {
      menuBtn.checked = false;
      navUl.classList.remove('show');
    });
  
    // Mostrar el slider lateral y ocultar el logo al hacer clic en el enlace "ACCESO"
    accesoLink.addEventListener('click', (event) => {
      event.preventDefault();
      sliderLateral.classList.toggle('show-slider');
      if (logoPrincipal.style.opacity === '0') {
        logoPrincipal.style.opacity = '1';
      } else {
        logoPrincipal.style.opacity = '0';
      }
        });
  });
  