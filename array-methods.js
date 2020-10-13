const comida = [

    {nombre: 'papas', precio: 400},
    {nombre: 'zanahorias', precio: 360},
    {nombre: 'cebolla', precio: 320},
    {nombre: 'inojo', precio: 340}

];


const numeros = [1,2,3,4,5,6,7,8,9];

//const inclusion = numeros.includes(2); //incluye?



//const existe = numeros.some( p => {

    //return  p === 2;


//}) // hay algun elemento que cumpla la condicion?


////////find index - encuentra el indice


//const index = numeros.findIndex(n => n === 3);
 


//reduce

let total = 0;

const productos = [
{nombre: 'remera', precio: 500}, 
{nombre:'vinilo',precio: 600}

]



//let resultado = productos.reduce( (total, producto) => total + producto.precio);


let resultado = productos.filter( p => p.precio> 400 );//algun elemento de mi conjunto objeto supera el precio de400?

console.log(resultado); 



/// concat



const numeros2 = [10,11,12,13,14];


 
const union1 = [...numeros,...numeros2];


//no modifica el arreglo
const union2 = [...numeros2, 'pepito juarez'];


console.log(union1);



