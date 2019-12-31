"use strict";

var nombre = function nombre(_nombre) {
  // return `Hola ${nombre}`
  console.log("Hola ".concat(_nombre));
};

var nombre2 = function nombre2(nombre) {
  // return `Hola ${nombre}`
  console.log("Hola ".concat(nombre));
};

nombre('Pablo');
nombre2('Pablo2');