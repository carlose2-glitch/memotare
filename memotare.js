let src;
let parrafo;
let contador=0;
let selecciones=[];
let tarjetas=[];

class Personajes{//crear clase para guardar los textos 
  constructor(sour, pa){
      this.sour = sour;//guarda el src de los objetos
      this.pa = pa;//guarda los parrafos de los objetos
  }
  source(){
      return this.sour;//retorna en src de acuerdo al objeto seleccionado
  }
  parrafo(){
    return this.pa;//retorna el parrafo de acuerdo al objeto seleccionado
  }
}


/*creo los objetos de cada personaje para poder implementar en el texto */
let baltazar = new Personajes('http://127.0.0.1:5500/imagenes/baltazar.png', 'A la nanita nana es un villancico compuesto por Jeremías Quintero, oriundo de Barbacoas, Nariño');

let gaspar = new Personajes('http://127.0.0.1:5500/imagenes/gaspar.png', 'La palabra Tutaina es utilizada en Perú para referirse coloquialmente a una fiesta pequeña, por lo que el título de este villancico se refiere a la celebración de la tradicional novena de aguinaldos.');

let jose = new Personajes('http://127.0.0.1:5500/imagenes/jose.png', 'En Ecuador, México, Colombia, Guatemala, el Salvador, Venezuela, Perú, Argentina, Chile y Canarias, la figura del Niño Jesús se coloca después de la llegada de la Navidad');

let maria = new Personajes('http://127.0.0.1:5500/imagenes/maria.png', 'La primera celebración navideña en la que se montó un pesebre para la conmemoración del nacimiento de Jesús, fue en la nochebuena del año 1223, realizada por San Francisco de Asís.');

let melchor = new Personajes('http://127.0.0.1:5500/imagenes/melchor.png', 'El villancico es un género de canción cuya letra hace referencia a la Navidad.')

let mula = new Personajes ('http://127.0.0.1:5500/imagenes/mula.png', 'En las posadas, cada uno de los nueve días representa un valor, como humildad, fortaleza, desapego, caridad, confianza, justicia, pureza, alegría generosidad.');

let nino = new Personajes ('http://127.0.0.1:5500/imagenes/nino.png', 'El villancico es un género de canción cuya letra hace referencia a la Navidad.');

let pastor = new Personajes('http://127.0.0.1:5500/imagenes/pastor.png', 'A las novenas se les llama "Las Posadas" y son fiestas populares en México, Honduras, Guatemala, El Salvador, Costa Rica, Nicaragua y Panamá.');

/*declaro una variable tipo arreglo para los objetos creados*/
let persons = [baltazar, gaspar, jose, maria, melchor, mula, nino, pastor];
/* obtengo la clase del texto de la segunda pantalla modal*/
let text = document.querySelector('.text');

const borrar = document.querySelector('.card_left');//creo la constante para poder eliminar las tarjetas cubiertas
const boton = document.querySelector('.boton-sombra');//creo la constante boton para luego hacer el llamado con el click
const modal = document.querySelector('.modal');//creo constante para modal principal
const cuerpo = document.querySelector('body');//creo la constante cuerpo para poder hacer modificaciones en el html
const botonp = document.querySelector('.b-medio');//para desactivar la tarjeta del pesebre y pulsar continuar
const targetsModals = document.querySelector(".modal_cards");//creo constante para las tarjetas modales del pesebre

/*constantes creadas para llamar a las imagenes cubiertas */
const joseh = document.querySelector('.jose');
const mariah = document.querySelector('.maria');
const gasparh = document.querySelector('.gaspar');
const pastorh = document.querySelector('.pastor');
const baltazarh = document.querySelector('.baltazar');
const melchorh = document.querySelector('.melchor');
const jesush = document.querySelector('.jesus');
const mulah = document.querySelector('.mula');
/* las agrupo todas en un arreglo para hacer iteracion en ellas*/
let img_cubiertas = [baltazarh, gasparh, joseh, mariah, melchorh, mulah, jesush, pastorh];




/*borrar tarjeta modal  principal*/
boton.addEventListener('click',()=>{
cuerpo.style.overflow = "auto";
cuerpo.removeChild(modal);

})

/*llamado a la funcion generar tablero */
generarTablero();
/*funcion cargar iconos */
function cargarIconos(){
    src =['./imagenes/baltazar.png',
             './imagenes/gaspar.png',
             './imagenes/jose.png',
             './imagenes/maria.png',
             './imagenes/melchor.png',
             './imagenes/mula.png',
             './imagenes/nino.png',
             './imagenes/pastor.png',
]
}
 
/*funcion generar tablero */
function generarTablero(){
     cargarIconos();
    let tablero = document.querySelector('.tablero');//crea una constante para poder agregar las tarjetas al tablero

    for(let i=0; i<=15;i++){//sirve para cargar las 16 tarjetas requeridas en el tablero
      //va guardando en la variable tarjetas las 16 cards requeridas en el tablero
        tarjetas.push(`  <div class="tarjeta">
        <div class="card" id="target${i}" onclick="selec_card(${i})">
    
            <img class="front" src="./imagenes/tarjeta_cubierta.png" alt="cubierta">
          

            <img class="back" id="trasera${i}" src="${src[0]}" alt="parejas">
        
          
        </div>
     </div> `)


        if(i%2==1){
            src.splice(0,1);//cada vez que el residuo de i sea igual a 1 se borrara con el metodo splice en la posicion 0 un src  
        }
    }
    tarjetas.sort(()=>Math.random()-0.5);//ordena el arreglo de tarjetas de manera aleatoria
    tablero.innerHTML= tarjetas.join(" ");//imprime en pantalla todas las tarjetas en el tablero
    tarjetas=[""];//borra a tarjetas para que no quede nada guardado
}

/*funcion seleccionar tarjeta */

function selec_card(i){

  let cards = document.getElementById("target"+i);//coge la tarjeta seleccionada por el usuario 
  

      if(cards.style.transform != "rotateY(180deg)"){//verifica que la tarjeta no este volteada
        cards.style.transform = "rotateY(180deg)";//voltea la tarjeta a 180 grados 
        
        selecciones.push(i);//guarda en selecciones la iteracion de la tarjeta seleccionada


      }
      //cuando las dos tarjetas han sido volteadas verifica si en el arreglo de selecciones es igual a dos posiciones
if (selecciones.length==2){
      deseleccionar(selecciones);//funcion que se encarga de verificar las tarjetas
      selecciones=[];

}}

/*deseleccionar tarjeta */
function deseleccionar(selecciones){
 
    let trasera1 = document.getElementById('trasera'+selecciones[0]);//escoge la primera tarjeta de la posicion 1 con el numero del id  
    let trasera2 = document.getElementById('trasera'+selecciones[1]);//escoge la primera tarjeta de la posicion 2 con el numero del id

    if(trasera1.src != trasera2.src){//verifica si el src no es igual
       
      let t1 = document.getElementById('target'+ selecciones[0]);//crea una constante para voltear a la primera tarjeta seleccionada
      let t2 = document.getElementById('target'+ selecciones[1]);//crea una constante para voltear a la primera tarjeta seleccionada
      

      setTimeout(()=>{//espera un segundo para voltear las cartas
        t1.style.transform = "rotateY(0deg)";//voltea la tarjeta 1
        t2.style.transform = "rotateY(0deg)";//voltea la tarjeta 2

      },1000)
      

    }else{//sin son iguales las tarjetas entra en esta zona

      setTimeout(()=>{//espera un segundo para entrar 
        
        for(let i=0;i<=7;i++){//creado para poder hacer una busqueda mas efectiva al momento de ingresar el texto en el modal 2
        if(trasera1.src == persons[i].source()){//verifica cual es el texto que le pertenece segun el personaje

        text.innerHTML = persons[i].parrafo();//ingresa el texto que le pertenece al personaje
    }
  }

        aparecerTargets(trasera1);//funcion para ingresar el modal 2

      },1000);
               
}

}

function aparecerTargets(trasera1){
  targetsModals.style.display= 'flex';//se encarga de aparecer el modal 2 en pantalla 
  cuerpo.style.overflow = 'hidden';//el estilo overflow del body es cambiado a hidden para poder impedir hacer scroll en pantalla

  for(let i =0; i<=7; i++){
   
      if(trasera1.src== persons[i].source()){//verifica si el src es igual 
        
        img_cubiertas[i].classList.add('mostrar');//agrega una clase en uno de los personajes de las tarjetas cubiertas y se va a encargar de hacer la animacion de cada tarjeta cubierta
        
        setTimeout(()=>{//espera tres segundos para poder borrar la tarjeta cubierta seleccionada
          borrar.removeChild(img_cubiertas[i]);
      
        },3000);
        
       
    }
  }

 botonp.addEventListener('click',()=>{
    targetsModals.style.display ='none';//desaparece la tarjeta modal 2
    cuerpo.style.overflow = 'auto';//cambia el overflow para que el usuario siga jugando

  })


}