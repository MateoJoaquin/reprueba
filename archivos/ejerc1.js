/*
================================================
ejercicio 1

function paroinpar() {
    
    if ( nmro % 2==0 ) {
          return ("el nmro " +nmro+ " es par")

    } else  { return("el nmro " +nmro+ " es impar")}
    
    
    
    

}

let nmro =prompt("indique un nmro")
let resultado=paroinpar()
console.log (resultado)

================================================
ejercicio 2
function mayoromenor() {
    if (nmro2 < nmro1 ) {
        return "el nmro " + nmro1 + " es el mayor"
    }else if (nmro2 > nmro1) {
      return "el nmro " + nmro2 + " es el mayor"
    } else { return "ambos nmros son iguales"}
    
 
    
    
    

}

let nmro1 =prompt("indique un nmro")
let nmro2=prompt("indique un segundo nmro")
let resultado = mayoromenor()
console.log (resultado)
================================================
ejercicio 3
function multiplo5() {
  if( nmro % 5 ==0) {
    return "el nmro " + nmro + " es multiplo de 5"

     
  } else { return "el nmro " + nmro + "  no es multiplo de 5" }

  
 
    
    
    

}
let nmro =prompt ("indique un nmro")
let resultado= multiplo5()
console.log (resultado)
================================================
ejercicio 4


function imprimir() {
    let nmro = prompt("Escriba un número");
    

    for (var i = 0; i <= nmro; i++) {
        console.log(i)
    }
}

imprimir()
===============================================

ejercico 5

function repetir() {
    let palabra =prompt("colocar palabra");
    let nmro =prompt("colocar nmro");
    for (var i=1; i <=nmro ;i++){
        console.log (palabra)
    }

}
repetir()
===============================================

ejercicio 6

let frutas =["manzana","pera","naranja","sandia"]

function imprimir () {
    console.log(frutas)
}
imprimir()
===============================================

ejercicio 7

let nmros =[ 1 ,2,3,4,5,6,7,8,9,10]

function imprimir (){
    for(var i=0;i<10;i++){
        if (i !== 5){
            console.log (nmros[i])

        }
    }
}
imprimir()

===============================================
ejercicio 8

let nmros =[ 2,4,6,8]
let x = prompt("indique nmro")

function multiplicador(){
 for (var i=0;i<4;i++){
    nmros [i] = (nmros[i])*x
   
 }
 console.log (nmros)
}


multiplicador()


===============================================

*/
