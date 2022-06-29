const express = require('express');
const app = express();
const fs = require('fs');
const Contenedor = require('./index2.js');
//Pase todos los productos a productos.txt
//let productos = [
//  { id: 1, nombre: 'Laptop', precio: 1000 },
//  { id: 2, nombre: 'Celular', precio: 2000 },
//  { id: 3, nombre: 'Tablet', precio: 3000 },];

app.get('/productos', (req, resp) => {
  fs.readFile('productos.txt', 'utf8', (err, data) => {
    let productos = JSON.parse(data);
    resp.send(productos);
  });
});

app.get('/productosRandom/:id', async (req, resp) => {
  let id = Number(req.params.id);
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

const PORT = 8000;
app.listen(PORT, () => console.log('Server on port 8000'));
