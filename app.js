
let numeroSecreto;
console.log(numeroSecreto);
let parrafo = document.querySelector('p');
parrafo.innerHTML='Indica un numero del 1 al 10';
let intentos=1;
let listaNumerosSorteados=[];
let numeroMaximo = 3;



condicionesIniciales();
//funcion escrita en HTML en un boton
function verificarIntento(){
    // let numeroDeUsuario = document.querySelector("input");
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroDeUsuario);
    // console.log(numeroSecreto===numeroDeUsuario);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        //cuando acierta
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else{
        //El  usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p", "El numero secreto es menor");
        }else{
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        console.log(intentos);
        limpiarCaja();
    }

    // alert("Click desde el botón");
}
//fucion para limpiar
function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
}
//funcion generica
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos=1;

    
}


function generarNumeroSecreto(){
    let numeroGenerado= Math.floor((Math.random()*numeroMaximo)+1);
    console.log("numero generado"+numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', `Ya se sortearon todos los numeros posibles`);

    }else{
            //si el número generado esta incluido en la lista
            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    
    //inicializar el numero de intentos
    condicionesIniciales();
    //generar numero aleatorio nuevamente
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}
