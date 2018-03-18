console.log("hola mundo");
var a=prompt("ingresá el valor de A"); console.log (a);
var b=prompt("Ingresá el valor de B"); console.log(b);
var c=prompt("Ingresá el valor de C"); console.log(c);

document.write("<br>");

function signo (x){

  if (x>0){
    return "+";
  }
  //else{
  //  return "-"
  //}

}

document.write ("Tu función es: Y=",a,"x^2",signo(b),b,"x",signo(c),c);
