/// crear elemento HTML

const enlace = document.createElement('a');

enlace.textContent = 'nuevoEnlace';


//// seleccionar donde estara el elemento



const nav = document.querySelector('nav');

//agregar enlaces//
nav.appendChild(enlace)


//seleccionar espacio donde estara el HTML



nav.insertBefore(enlace, nav.children[1]);


enlace.onclick = Click;




function Click(){

    alert('diste click')


}



//const parrafo = document.createElement('p');
//parrafo.textContent='pepegrillo Fernandez';
//parrafo.classList.add('p1');

//const section = document.querySelector('section');

//section.appendChild(parrafo);





















