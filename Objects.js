/////////////objects literal  

//const televisor = {
//    nombre : 'Sanyo',
//    pantalla : 'led',
//    precio : 400,
//    fabricacion: {
    
//            pais: 'china',
//            ciudad: 'hong-kong',
            
//            medidas: {
//                peso: '1kg',
//                ancho: '1m'
//            }
    
    
//    }

//}


////////////////const pepegrillo = {

//    color: 'verde',
//    altura: '5cm',
//    alimentacion: 'habichuelas',
//    ropa: {

//        smoking: true,
//        sombrero: true,

//        pantalones: {
//            devestir:true,
//            color: 'azul marino'


//        }

//    }

//}


//pepegrillo.ojos = 'grandes';

//const {color, ropa: { pantalones } } = pepegrillo;
//const {ropa} = pepegrillo;



//delete pepegrillo.alimentacion;








//add property
//televisor.calidad ='full HD';

// delete

//delete televisor.nombre;




//Destructuring ;/

//const {nombre,precio,calidad} = televisor;

//rconsole.log(nombre,precio,calidad);


//object into object

//destructuring 2





//const {nombre, fabricacion: { medidas } } = televisor;
                //accedo al objeto anidado



//freeze

///////Object.freeze(pepegrillo);

//pepegrillo.segundaAlimentacion = 'vegetales';

//console.log(pepegrillo.segundaAlimentacion)


////////console.log(Object.isFrozen(pepegrillo));


//////Object.seal(televisor);

///////televisor.antena = 'wi-fi';

// UNIR OBJETOS

/////////const union = Object.assign(pepegrillo,televisor);

//const union2 = {...televisor,...pepegrillo};

//console.log(union2);



//object constructor//


//////function FuncionObjeto(nombre,color) {

    //this.nombre = nombre;
    //this.color = color;




//}



///////////////const objetoFuncion = new FuncionObjeto('Caracola', 'azul');
//console.log(objetoFuncion);


const computadora = {

    luz: 'led',
    pantalla: 'full hd',
    disco: true
    




}



//////////////////into the keys

//console.log(Object.keys(computadora));

console.log(Object.entries(computadora));