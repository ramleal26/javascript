

                //parameter
function Iterar(a){
//ident
    
    for(i=0; i<=a;i++){

        console.log(i);



    }


}



//Iterar(15)


//function declaration
///function Nombre(nombre) {

   // console.log(nombre);


//}



//Nombre('pepegrillo')



// /////////////Funcion Expression


//const Nombre2 = function(nombre) {

   // console.log(nombre)

//}


//default parameters


function nombreApellido(nombre,apellido = ''){

    console.log(nombre,apellido)



}


//nombreApellido('pepegrillo','seclantenio');


function Iniciar() {

    console.log('iniciando.');
    procesoDos();
    proceso3();



}


function procesoDos() {

    console.log('Segundo Proceso');




}


function proceso3(){

    console.log('Tercer proceso y fin.');



}


//Iniciar();

////////////////////////return

let ingreso = 0;

function ingresoCuenta(dinero){

    return dinero += ingreso;

}

function plusBancoTotal(ingreso){

    return ingreso *1.15;



}
 
ingreso = ingresoCuenta(500);
ingreso = ingresoCuenta(600);
ingreso = ingresoCuenta(700);

const total = plusBancoTotal(1800);


///console.log(total)

//funciones en objetos

const reproductor = {

    reproducir: function(cancion){

        console.log(`reproduciendo cancion ${cancion}`)


   },

    cambiar: function() {

        console.log(`cambiando cancion`)



    },

    pausar: function() {


        console.log('pausa')

    }

    






}


//reproductor.reproducir('overture');
//reproductor.cambiar();
//reproductor.pausar();



//arrow functions


const arrowF = () => {

    console.log('hola soy una arrow function')

}

const arrowF2 = () => 'hola,soy una arrowF en una sola linea y sin return!(que bueno, me ahorra tener que acordarme mas codigo)'

//alert(arrowF2)

//arrowF();

//for Each on arrow function 



const pepegrillo = [


    {comida: 'habichuelas'},
    {comida: 'bife'},
    {comida: 'papas fritas'},
    {comida: 'yakult'},
    {comida: 'serenito'},
    {comida: 'vegetales'},
    {comida: 'fecula de mandioca'}

]


pepegrillo.forEach((p) => console.log(p.comida));

























