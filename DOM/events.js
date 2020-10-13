////document.addEventListener('DOMContentLoaded', () => {
    //console.log('ready');



//})


/////////////EVENTOS del MOUSE

////click 

const inicio = document.querySelector('li');
const navegacion = document.querySelector('nav');

//navegacion.addEventListener('click', () => {


//    alert('diste click');


//})




////mouseenter



inicio.addEventListener('mouseenter', () => {


    inicio.style.backgroundColor = 'transparent';

    
    
})


////mouseout
inicio.addEventListener('mouseout', () => {

    //inicio.style.backgroundColor = 'blue';
    
    
    
})



////dblclick


//inicio.addEventListener('dblclick', () =>{

    //inicio.style.backgroundColor = 'blue';

//})


//////EVENTOS en el TECLADO


////keydown

const entrada = document.querySelector('input');

entrada.addEventListener('keydown', () => {

    //alert('tocaste una tecla');


})

//entrada.addEventListener('input', () => {

  //console.log('hiciste algo con las teclas');


//})

//// saber que escribre el usuario.

//entrada.addEventListener('input', (i) => {

  //  console.log(i );
  
  
  //})


//////formularios


//const formulario = document.querySelector('.formulario');

//formulario.addEventListener('submit', (e) => {
  //  e.preventDefault();
  //  console.log(e.target.value);
  

//});

//////scroll


////scroll hacia abajo o hacia arriba
//window.addEventListener('scroll', () => {

    //const scrollPX = window.scrollY;




//})

//// saber a que distancia esta un elemento de otro


window.addEventListener('scroll', () =>{


    //buscamos el elemento
    const nav = document.querySelector('nav');
    console.log(nav.getBoundingClientRect());//definimos metodo en una variable o imprimimos en pantalla


});









