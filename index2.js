const fs = require('fs');

fs.readFileSync;
fs.writeFileSync;
fs.appendFileSync;
fs.unlinkSync;
fs.mkdirSync;

//Traigo todo el archivo a una variable.
const data = fs.readFileSync('index.js', 'utf8');
//console.log(data);

//Con esta funcion puedo crear un archivo a otro.
const data2 = fs.writeFileSync('index3.js', 'ESTO ES UNA PRUEBA\n');
console.log(data2);
//Con esta funcion puedo agregar texto al archivo.
const data3 = fs.appendFileSync('index3.js', 'CORRE WACHIN\n');
console.log(data3);
//Con esta funcion puedo eliminar un archivo.
//-----fs.unlinkSync('index3.js');
