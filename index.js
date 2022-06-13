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
    this.nombre + ' ' + this.apellido;
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
console.log(usuario1);

let usuario2 = new Usuario('Pedro', 'Ramirez', 32, 'Las Cronicas de Narnia', 4);
let usuario3 = new Usuario('Maria', 'Lopez', 18, 'La Verdadera Guerra', 2);
let usuario4 = new Usuario('Agustin', 'Rojas', 45, 'Rayuela', 2);
let usuario5 = new Usuario('Charly', 'Garcia', 64, 'El Padrino', 3);
listadoUsuarios.push(usuario1);
listadoUsuarios.push(usuario2);
listadoUsuarios.push(usuario3);
listadoUsuarios.push(usuario4);
listadoUsuarios.push(usuario5);
usuario1.getFullName();
usuario1.cumplirAños();
usuario1.addMascotas();
usuario1.countMascotas(usuario1);
console.log(usuario1.mascotas.length);
usuario1.egresar('Egresado');
usuario3.egresar('Egresado');
usuario5.egresar('Egresado');
//console.log(listadoUsuarios);

class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.libros = [];
  }
  addBook(titulo, autor) {
    let libro = {};
    this.titulo = titulo;
    this.autor = autor;
    this.libros.push(libro);
  }
}
let persona = new Libro('Belisario');
persona.addBook('El señor de los anillos', 'J.R.R. Tolkien');
console.log(persona);

console.log(usuario1);
