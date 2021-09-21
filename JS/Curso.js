'use strict';

//Objetos
let objeto = {
  atributo: 1,
  nombre: 'Perico Palotes',
  parejas: ['Maria', 'Pedro', 'Tenorio'],
  metodo2: function(num){
    console.log('Tengo ' + num + '$');
  }
};

console.log(objeto);
console.log('Me llamo ' + objeto.nombre);
console.log('A ' + objeto.parejas[0] + ' le gusta ' + objeto.parejas[2]);

//---------------------------------------------------
function funcion_1(){
  document.write('<br />Me encanta JS');
}
funcion_1();
let num = 7; //num es integer
num = funcion_1; //num pasa a funcion
num(); //sacamos la funcion num que es funcion_1 ya que lo hemos igalado arriba

objeto.metodo = funcion_1;
objeto.metodo();
objeto.metodo2(1785);
//---------------------------------------------------
function suma(a, b=4){ //valor por defecto b=4
  return (a+b);
}
console.log(suma(5, 6));
console.log(suma(5));
//---------------------------------------------------
function ejecuta(callback){
  console.log('Ejecutando...');
  callback();
}
ejecuta(funcion_1);
//---------------------------------------------------
//Excepciones
try{
  let nombre = 'Miguel';
  console.log(nombre.substr(1,4));
}
catch(excepcion){
  console.log(excepcion);
}
finally{
  console.log('ejecuto el finally');
}
//---------------------------------------------------
//Arrays
let vector = [1, 2, 3];
let vectorFeo = [1, 2, 'alop', function funcion122(){console.log('mal')}];
let matriz = [
  [2, 2, 2],
  [3, 3, 3],
  [4, 4, 4]
];
