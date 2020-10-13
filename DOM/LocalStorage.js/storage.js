

//solo puedo agregar strings 
//localStorage.setItem('nombre', 'Ricardo');


//clave, valor




//objetos


//const object = {

  //  nombre: 'objeto object',
  //  precio: 0


//}

////convertir objeto en String 

//const productoString = JSON.stringify(object);
//localStorage.setItem('object', productoString);

//////getItem

let pepegrillo = localStorage.setItem('nombre','pepegrillo');

//const dato = localStorage.getItem('nombre');
//console.log(dato);


const numeros = [1,2,3,4,5,6,7,8,9];


localStorage.setItem('numeros', numeros);


////eliminar elementos


localStorage.removeItem('object');


////actualizar registro

const meses = ['enero','febrero','marzo'];

localStorage.setItem('Meses', meses);

const mesesArray = JSON.parse(localStorage.getItem('meses'));








 

 