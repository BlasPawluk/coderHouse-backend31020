const fs = require('fs');

module.exports = class Contenedor {
  constructor(nameFile) {
    this.nameFile = nameFile;
  }

  getAll() {
    const response = fs.readFileSync(this.nameFile, 'utf-8');
    if (response === '') {
      return this.assign(true);
    } else {
      return JSON.parse(response);
    }
  }

  get(id) {
    const data = this.getAll();
    if (id <= 0 || id > data.length) {
      return {
        error: 'El producto con el id especificado no ha sido encontrado.',
      };
    }
    return data.find((element) => element.id === id);
  }

  save(product) {
    const data = this.getAll();
    product.id = data.length + 1;
    data.push(product);
    fs.writeFileSync(this.nameFile, JSON.stringify(data));
    return {
      product: product,
    };
  }

  update(id, product) {
    const data = this.getAll();
    if (id <= 0 || id > data.length) {
      return {
        error: 'El producto con el id especificado no ha sido encontrado.',
      };
    }
    product.id = id;
    const previousProduct = data.splice(id - 1, 1, product);
    fs.writeFileSync(this.nameFile, JSON.stringify(data));
    return {
      previous: previousProduct,
      new: product,
    };
  }

  delete(id) {
    const data = this.getAll();
    if (id <= 0 || id > data.length) {
      return {
        error: 'El producto con el id especificado no ha sido encontrado.',
      };
    } else {
      const previousProduct = data.splice(id - 1, 1);
      fs.writeFileSync(this.nameFile, JSON.stringify(data));
      this.assign();
      return {
        deleted: previousProduct,
      };
    }
  }

  // Agrega id a los productos del archivo "productos.json" si sufre alguna modificacion
  assign(empty = false) {
    if (empty) {
      let id = 1;
      listaProductos.forEach((element) => {
        element.id = id++;
      });
      fs.writeFileSync(this.nameFile, JSON.stringify(listaProductos));
      return listaProductos;
    } else {
      const data = this.getAll();
      let id = 1;
      data.forEach((element) => {
        element.id = id++;
      });
      fs.writeFileSync(this.nameFile, JSON.stringify(data));
    }
  }
};

const listaProductos = [
  {
    nombre: 'Nike Jordan Style Loyal',
    precio: 450000,
    imagen: 'https://i.ibb.co/SK18Szh/Nike-Jordan-Stay-Loyal.webp',
  },
  {
    nombre: 'Adidas Stan Smith',
    precio: 450000,
    imagen: 'https://i.ibb.co/C6y979J/Stan-Smith.webp',
  },
  {
    nombre: 'Puma Electrify Nitro',
    precio: 450000,
    imagen: 'https://i.ibb.co/5kjhkmP/Electrify-Nitro.webp',
  },
  {
    nombre: 'Forum 84 Low ADV',
    precio: 45000,
    imagen: 'https://i.ibb.co/VxWk8j9/Forum-84-Low-ADV.webp',
  },
  {
    nombre: 'Retropy F2',
    precio: 45000,
    imagen: 'https://i.ibb.co/YyfNVFK/Retropy-F2.webp',
  },
  {
    nombre: 'Forum Mid',
    precio: 45000,
    imagen: 'https://i.ibb.co/2tfJ0wR/Forum-Mid.jpg',
  },
  {
    nombre: 'OZWEEGO Celox',
    precio: 45000,
    imagen: 'https://i.ibb.co/9gHwV04/OZWEEGO-Celox.webp',
  },
  {
    nombre: 'Kosmo Rider Gradient',
    precio: 45000,
    imagen: 'https://i.ibb.co/WW59BSF/Kosmo-Rider-Gradient.webp',
  },
  {
    nombre: 'Liberate Nitro',
    precio: 45000,
    imagen: 'https://i.ibb.co/hm8rQ57/Liberate-Nitro.webp',
  },
  {
    nombre: 'Nike Jordan Stay Loyal',
    precio: 45000,
    imagen: 'https://i.ibb.co/SK18Szh/Nike-Jordan-Stay-Loyal.webp',
  },
];
