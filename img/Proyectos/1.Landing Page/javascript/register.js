console.log("script conectado exitosamente")
const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

//------EXPRESIONES REGULARES---------
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	password: false,
	correo: false,
	
}


//----VALIDACIONES FORMULARIO--------
const validarFormulario = (e) => {

		
	//----Grupo Password----------
	switch (e.target.name) { 
		case "password": 
			validarCampo(expresiones.password, e.target, 'password');
		break;
	}
	
	//----Grupo Correo Electrónico----------
	switch (e.target.name) { 
		case "correo": 
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
	
}



const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
		campos[campo] = false;
	}			
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
})
	
	
	


formulario.addEventListener('submit', (e) => {
	
	e.preventDefault();

	const terminos = document.getElementById('terminos')
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		

		setTimeout(() => { //desaparece el mensaje a los 5 segundos
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000)

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto')
		}) //desaparecen los iconos al darle a enviar
	} else{
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
		
	}
	
})

// inputs.forEach((input) => {
// 	input.addEventListener('input', () => {
// 		// alert('Tecla levantada');
// 		// console.log('Tecla levantada'); //te dice la tecla que estas presionando
		
// 	});