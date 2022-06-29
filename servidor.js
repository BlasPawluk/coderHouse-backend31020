const express = require('express');
const app = express();
const fs = require('fs');
//Pase todos los productos a productos.txt
//let productos = [
//  { id: 1, nombre: 'Laptop', precio: 1000 },
//  { id: 2, nombre: 'Celular', precio: 2000 },
//  { id: 3, nombre: 'Tablet', precio: 3000 },
//];

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  getAll() {
    const respuesta = fs.readFileSync(this.nombreArchivo, 'utf-8');
    return JSON.parse(respuesta);
  }

  getRandom() {
    const datos = this.getAll();
    const random = Math.floor(Math.random() * datos.length);
    return random;
  }
}
const PORT = 8080;
app.listen(PORT, () => console.log('Server on port 8080'));

const contenedor1 = new Contenedor('productos.txt');
contenedor1.getRandom();

app.get('/', (req, res) => {
  res.send(`<h1>Bienvenidos!</h1>`);
});

app.get('/productos', (req, resp) => {
  resp.send(productos);
});

app.get('/productosRandom/:id', async (req, resp) => {
  let id = Number(req.params.id) - 1;
  let result = await fs.promises.readFile('productos.txt', 'utf-8');
  let productos = JSON.parse(result);
  let buscador = buscarProducto(productos, id);
  console.log(buscador);
  resp.send(productos[id]); //Envio el objeto que se encuentra en la posicion id
});

const buscarProducto = (productos, id) => {
  let prod = productos.find((elem) => elem.id == id);
  return prod;
};
const contenedorServidor = new Contenedor('productos.txt');
