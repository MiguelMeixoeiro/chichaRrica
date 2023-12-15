document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.querySelector('.formulario form');

    formulario.addEventListener('submit', function (event) {
      // Validaciones antes de enviar el formulario
      if (!validarEmail() || !validarPassword()) {
        // Si alguna validación falla, evitamos el envío del formulario
        event.preventDefault();
      }
    });

    function validarEmail() {
      var email = document.getElementById('email').value.trim();
      if (email === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return false;
      }
      return true;
    }

    function validarPassword() {
      var password = document.getElementById('password').value.trim();
      if (password === '') {
        alert('Por favor, ingresa tu contraseña.');
        return false;
      }
      return true;
    }
  });