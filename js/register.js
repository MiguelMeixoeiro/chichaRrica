const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contraseña: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	contraseña: false,
	correo: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "contraseña":
			validarCampo(expresiones.password, e.target, 'contraseña');
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});



document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.querySelector('.formulario form');

    formulario.addEventListener('submit', function (event) {
      // Validaciones antes de enviar el formulario
      if (!validarNombre() || !validarEmail() || !validarPassword()) {
        // Si alguna validación falla, evitamos el envío del formulario
        event.preventDefault();
      }
    });



    // function validarNombre() {
    //   var nombre = document.getElementById('nombre').value.trim();
    //   var errorNombre = document.getElementById('errorNombre');
    //   if (nombre === '') {
    //     errorNombre.textContent = 'Por favor, ingresa tu nombre.';
    //     return false;
    //   } else {
    //     errorNombre.textContent = '';
    //     return true;
    //   }
    // }

    // function validarEmail() {
    //   var email = document.getElementById('email').value.trim();
    //   var errorEmail = document.getElementById('errorEmail');
    //   if (email === '') {
    //     errorEmail.textContent = 'Por favor, ingresa tu correo electrónico.';
    //     return false;
    //   } else {
    //     errorEmail.textContent = '';
    //     return true;
    //   }
    // }

    // function validarPassword() {
    //   var password = document.getElementById('password').value.trim();
    //   var errorPassword = document.getElementById('errorPassword');
    //   if (password === '') {
    //     errorPassword.textContent = 'Por favor, ingresa tu contraseña.';
    //     return false;
    //   } else {
    //     errorPassword.textContent = '';
    //     return true;
    //   }
    // }
  });
  