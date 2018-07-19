
//var f=prompt("ingresá la función");
var f,x,a,b;

function obtener (){

f=document.getElementById("funcion").value;

console.log("longitud de la cadena: ",f.length);

x=f.indexOf('x'); console.log('Posicion de variable x: ',x);

a=f.substr(0,x); console.log('El valor de a sera: ',a);

b=f.substring(x+1); console.log ('El valor de b sera: ',b);


}
