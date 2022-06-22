const fs = require('fs');
//creo la clase contenedor con las funciones que necesito.
class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }
  async save(objetoParaGuardar) {
    try {
      //creo la promise con await aplicando readFile
      const responder = await fs.promises.readFile(this.nombreArchivo, 'utf8');
      if (responder == '') {
        objetoParaGuardar.id = 1;
        const arrObjetos = [objetoParaGuardar];
        await fs.Promises.appendFile(
          this.nombreArchivo,
          JSON.stringify(arrObjetos)
        );
        return console.log(objetoParaGuardar.id);
      } else {
        const datosObjeto = JSON.parse(responder);
        objetoParaGuardar.id = datosObjeto.length + 1;
        datosObjeto.push(objetoParaGuardar);
        await fs.promises.writeFile(
          this.nombreArchivo,
          JSON.stringify(datosObjeto)
        );
        return console.log(objetoParaGuardar.id);
      }
      //pongo un catch por si hay algun error
    } catch (error) {
      console.log(`Su error fue: ${error}`);
    }
  }
  async getAll() {
    try {
      const responder = await fs.promises.readFile(this.nombreArchivo, 'utf8');
      const datosObjeto = await JSON.parse(responder);
      return console.log(datosObjeto);
    } catch (error) {
      console.log(`Su error fue: ${error}`);
    }
  }
  async deleteById(id) {
    try {
      const responder = await fs.promises.readFile(this.nombreArchivo);
      const datosObjeto = await JSON.parse(responder);
      //Aplico el metodo splice para eliminar el objeto
      const objEliminado = datosObjeto.splice(id - 1, 1);
      if (objEliminado.length > 0) {
        await fs.promises.writeFile(
          this.nombreArchivo,
          JSON.stringify(JSON.stringify(datosObjeto))
        );
        return console.log('Objeto Eliminado:\n', objEliminado);
      } else {
        console.log('Ese objeto que estas tratando de eliminar no existe');
      }
    } catch (error) {
      console.log(`Su error fue: ${error}`);
    }
  }
  async deleteAll() {
    try {
      await fs.promises.writeFile(this.nombreArchivo, '');
      return console.log(
        `Todos los datos de ${this.nombreArchivo} fueron eliminados`
      );
    } catch (error) {
      console.log(`Su error fue: ${error}`);
    }
  }
}

const contenedor1 = new Contenedor('productos.json');

const producto1 = {
  nombre: 'Nike Air Max',
  precio: '$200',
  descripcion: 'Zapatos de para salir a correr',
};

const producto2 = {
  nombre: 'Nike Air Force 1',
  precio: '$300',
  descripcion: 'Zapatos de para salir de joda',
};

const producto3 = {
  nombre: 'Nike Jordan 1',
  precio: '$500',
  descripcion: 'Zapatos de para ir a caminar',
};

setTimeout(() => {
  contenedor1.save(producto1);
}, 2000);
setTimeout(() => {
  contenedor1.save(producto2);
}, 1000);
setTimeout(() => {
  contenedor1.save(producto3);
}, 3000);
setTimeout(() => {
  contenedor1.getById(2);
}, 4000);
setTimeout(() => {
  contenedor1.getAll();
}, 5000);
setTimeout(() => {
  contenedor1.deleteById(2), 6000;
});
setTimeout(() => {
  contenedor1.deleteAll(), 7000;
});
