window.onload = () => {


const tododeul = [];

const form = document.getElementById('-form')

form.onsubmit = (e) => { 

   e.preventDefault();

   const elementList = document.getElementById('intext');
   const todoLista = elementList.value;
   elementList.value = '';
   tododeul.push(todoLista);
   const listaNo = document.getElementById('listaimpresora');
   const elementosIngresadosListaNoOrdenada = tododeul.map(t =>'<li>'+ t + '</li>');
   listaNo.innerHTML = elementosIngresadosListaNoOrdenada.join(' ');
   tododeul.splice(1,2);
   const elementos = document.querySelectorAll('#listaimpresora');
  







}


}
