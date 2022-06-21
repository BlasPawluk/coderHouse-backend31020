const fs = require('fs');
let listadoUsuarios = [];
let listaDeLibros = [];

class Usuario {
  constructor(nombre, apellido, edad, libros, mascotas, titulo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.libros = libros;
    this.mascotas = [];
    this.titulo = titulo;
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  cumplirAños() {
    this.edad++;
  }
  addMascotas() {
    this.mascotas.push('perro', 'gato');
  }
  countMascotas(usuario) {
    return usuario.mascotas.length;
  }
  egresar(titulo) {
    this.titulo = titulo;
  }
}

let usuario1 = new Usuario('Juan', 'Perez', 20, 'LOTR');
//console.log(usuario1);

let usuario2 = new Usuario('Pedro', 'Ramirez', 32, 'Las Cronicas de Narnia', 4);
let usuario3 = new Usuario('Maria', 'Lopez', 18, 'La Verdadera Guerra', 2);
let usuario4 = new Usuario('Agustin', 'Rojas', 45, 'Rayuela', 2);
let usuario5 = new Usuario('Charly', 'Garcia', 64, 'El Padrino', 3);

class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.libros = [];
  }
  addBook(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    let libros = {};
    this.libros.push(libros);
  }
  getBook(titulo) {
    return this.libros.find((libro) => libro.titulo === titulo);
  }
}
let librito1 = new Libro(' ');
let librito2 = new Libro(' ');
//CLogueo antes para mostrar que estan vacios.
//console.log(listadoUsuarios);
//console.log(listaDeLibros);

//Aplico las funciones

listadoUsuarios.push(usuario1);
listadoUsuarios.push(usuario2);
listadoUsuarios.push(usuario3);
listadoUsuarios.push(usuario4);
listadoUsuarios.push(usuario5);
librito1.addBook('El señor de los anillos', 'J.R.R. Tolkien');
librito2.addBook('El Padrino', 'Mario Puzo');
//consolegueo antes de ejecutar las funciones sobre "usuario1"
//console.log(usuario1);
usuario1.getFullName();
usuario1.cumplirAños();
usuario1.addMascotas();
usuario1.countMascotas(usuario1);
usuario1.egresar('Dotor');
usuario3.egresar('Boga');
usuario5.egresar('Ferretero');
listaDeLibros.push(librito1);
listaDeLibros.push(librito2);

//una vez pusheados los usuarios y libros en el array, los muestro en consola, y debajo de ambas Class pido un ejemplo con usuario1
//console.log(usuario1);

//Pido por medio de usuario.mascotas.length el numero de mascotas del primer usuario y lo muestro en consola, gracias a addMascotas y countMascotas me da como resultado "2"
//console.log(usuario1.mascotas.length);

//Finalmente, pido a la consola que me muestre los libros agregados en la Class Libro por medio de la funcion addBook.
//console.log(librito1);
//console.log(librito2);
