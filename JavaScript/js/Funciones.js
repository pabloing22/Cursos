//ESTRUCTURA BÁSICA
//function nombre_función(parametros){
//  instrucciones
//}


function suma (a,b){
  return a+b;
}

function producto (a,b){
  return a*b
}

//console.log (suma(10,20));
//console.log(producto(5,5));



var num1=0;
var num2=0;
var mult=0;

var name;



num1=parseInt(prompt("Ingrese un numero 1"));
num2=parseInt(prompt("Ingrese un numero 2"));

document.write("El resultado de la suma es: ", suma(num1,num2), "<br>");

for (i=1;i<=num2;i++){
  mult=mult+num1;
}

document.write("El resultado del producto es: ", mult)
