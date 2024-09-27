document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu__btn');
  const menuIcon = document.querySelector('.menu__icon i');
  const navUl = document.querySelector('header nav ul');
  const sliderLateral = document.getElementById('sliderLateralContainer');
  const accesoLink = document.getElementById('sliderRojo');
  const logoPrincipal = document.getElementById('logoPrincipal');

  menuBtn.addEventListener('change', () => {
      if (menuBtn.checked) {
          navUl.classList.add('show');
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-times');
          // Cambia el ícono a "x"
      } else {
          navUl.classList.remove('show');
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
          // Restaura el ícono de hamburguesa
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
      if (logoPrincipal.style.opacity === '' || logoPrincipal.style.opacity === '1') {
          logoPrincipal.style.opacity = '0';
      } else {
          logoPrincipal.style.opacity = '1';
      }
  });

  // Oculta el slider lateral cuando se hace clic en el enlace con la clase "navicon"
  const naviconLink = document.querySelector('.navicon');
  naviconLink.addEventListener('click', () => {
      sliderLateral.classList.remove('show-slider');
      logoPrincipal.style.opacity = '1';
  });
});
