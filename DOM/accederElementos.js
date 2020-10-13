//let elemento;


//elemento = document;
//elemento = document.head;
//elemento = document.body;
//elemento = document.forms  ;







//console.log(elemento)












////////////////////////////GetElementByClass('')


//const form = document.getElementsByClassName('formulario');

//console.log(form);
 


/////////////////getElementById

 
//const form2 = document.getElementById('-form');
//console.log(form2)



////////////////querySelector (solo selecciona un elemento.)


//const query = document.querySelector('.pepino .minion1')

//const query2= document.querySelector('pepino') 
//console.log(query2);



//const gato = document.querySelector('ul');


///////////////////querySelectorAll (all elements)




//const todo = document.querySelectorAll('.form .input')

//console.log(todo);







//console.log();


//const cabeceroPrincipal = document.querySelector('h1').textContent = 'Hacha paracha gonzales.';//modificar texto



/////////cambiar CSS;


//const texto = document.querySelector('h1');


//texto.style.backgroundColor= 'red';


//const titulo = document.querySelector('#encabezado');

////agregar clase

////titulo.classList.add('nueva-clase');

//console.log(titulo.classList);


////travesing the DOM


const navegacion = document.querySelector('ul');

//los espacios en blanco son elementos.

//console.log(navegacion.children[0].nodeName);


//// from the father


const lista = document.querySelector('ul');

//console.log(lista.parentElement);

////hermanos

//const li = document.querySelector('.lista-nav .enlace-nav');

//console.log(li);



//primer elemento


//const ul = document.querySelector('ul')

//console.log(ul.lastElementChild);



////delete elements DOM



//const a = document.querySelector('a');
////a.remove();

////console.log(a)




//// delete from the father


const ul = document.querySelector('ul');

ul.removeChild(ul.children[2]);


































