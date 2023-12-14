const ventanaformulario = document.querySelector('.ventanaformulario');
const linklogin = document.querySelector('.linklogin');
const linkregistro = document.querySelector('.linkregistro');
const boton = document.querySelector('.boton');
const boton2 = document.querySelector('.boton2');
const iconclose = document.querySelector('.icon-close');
const linklogin2 = document.querySelector('.linklogin')


linkregistro.addEventListener('click',()=> {
    ventanaformulario.classList.add('active');
});

linklogin.addEventListener('click',()=> {
    ventanaformulario.classList.remove('active');
});


boton.addEventListener('click',()=> {
    ventanaformulario.classList.add('active-popup');  
});

boton2.addEventListener('click',()=> {
    ventanaformulario.classList.add('active-popup2');
 });


linklogin2.addEventListener('click',()=> {
    ventanaformulario.classList.remove('active-popup2')
    ventanaformulario.classList.add('active-popup');
 });


iconclose.addEventListener('click',()=> {
    ventanaformulario.classList.remove('active-popup','active-popup2','active');
 });

 
