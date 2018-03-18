//alert("holis");

var text = "Hola Pablo";
var nombre = "vacio";
var texto = "esto está dentro de una variable llamada texto";
var arreglo = ['Elemento1','Elemento2','Elemento3', 25, true];
// (nombre del arreglo).length nos devuelve como resultado el tamaño del arreglo
var band = true;
var vble; //undefined
//var nombre = null //pone a cero un valor
//Nan indica cuando una operación con variables no es admitida.
//alert (text);
//alert (nombre);
nombre = "Pablo";//prompt ("Ingresá tu nombre bro");
edad = 25; //prompt ("Ingresá tu edad");
edad2 = "25" // JAVASCRIPT interpreta esto como un numero
arreglo[0]=nombre;
//"<br>" SALTO DE LINEA
console.log("tienes ", arreglo.length, " elementos en tu arreglo");
//console.log(nombre);

//Métodos de inserción en arreglos
arreglo[arreglo.length]="Ultimo elemento"
console.log("tienes ", arreglo.length, " elementos en tu arreglo");

arreglo.push("Otro ultimo elemento");
console.log("tienes ", arreglo.length, " elementos en tu arreglo");
console.log(arreglo)
//----------------------------------

//Método de eliminación en arreglos
arreglo.pop(); //Elimina el último elemento.
console.log("tienes ", arreglo.length, " elementos en tu arreglo");
console.log(arreglo)
//------------------------------------

//Concatenar arreglos
var arreglo2 = ["Pablo", "nicolas", "nunñez"];
var arreglo3 = arreglo2.concat(arreglo);
//-----------------------------

//método JOIN agrega un caracter o lo que esté "" entre cada uno de los elementos del arreglo pero no modifica el arreglo en sí
document.write(arreglo3.join(" - "),"<br>");

var arreglo4 = arreglo3.join(" - ");

console.log(arreglo4);
//--------------------------------

//ORDENAMIENTO de arrelgos
var arreglo_ordenado = arreglo3.sort();

//-------------------------------

//CONDICIONALES y CICLOS---------------------------------------------------------

nombre = prompt ("ingresá tu nombre");
edad = prompt ("ingresá tu edad");

//operador AND && operador OR ||
// > < >= <= == != cuando vemos === comprueba el valor de verdad y el si los tipos de datos coinciden

if (edad>18 ){
  document.write ("Excelente ",nombre," sos mayor a 18");
} else {
  document.write("No puedes ingresar al sitio", );
}

document.write("<br>");

//if (condicion){
//  instrucciones
//} else if () {
//instrucciones
//} else {
//  blablabla
//}

for ( i=1; i<=10; i = i+1){
  //console.log (i);
  document.write(i, "<br>");
}


//switch (expression) {
//  case expression:
//
//    break;
//  default:
//
//}

//while (true) {
//  
//}
