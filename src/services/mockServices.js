

const database =  [
    {
        "id": 1,
        "titulo": "Jean",
        "img": "http://dummyimage.com/138x100.png/5fa2dd/ffffff",
        "precio": 50,
        "descripcion": "Korea Electric Power Corporation"
      }, {
        "id": 2,
        "titulo": "Remera",
        "img": "http://dummyimage.com/190x100.png/cc0000/ffffff",
        "precio": 41,
        "descripcion": "Synaptics Incorporated"
      }, {
        "id": 3,
        "titulo": "Jean",
        "img": "http://dummyimage.com/159x100.png/dddddd/000000",
        "precio": 38,
        "descripcion": "Capital One Financial Corporation"
      }, {
        "id": 4,
        "titulo": "Remera",
        "img": "http://dummyimage.com/131x100.png/5fa2dd/ffffff",
        "precio": 14,
        "descripcion": "Rosehill Resources Inc."
      }, {
        "id": 5,
        "titulo": "Zapas",
        "img": "http://dummyimage.com/174x100.png/5fa2dd/ffffff",
        "precio": 24,
        "descripcion": "Validus Holdings, Ltd."
      }, {
        "id": 6,
        "titulo": "Remera",
        "img": "http://dummyimage.com/150x100.png/cc0000/ffffff",
        "precio": 71,
        "descripcion": "AmTrust Financial Services, Inc."
      }, {
        "id": 7,
        "titulo": "Remera",
        "img": "http://dummyimage.com/240x100.png/dddddd/000000",
        "precio": 77,
        "descripcion": "Amkor Technology, Inc."
      }, {
        "id": 8,
        "titulo": "Zapas",
        "img": "http://dummyimage.com/224x100.png/dddddd/000000",
        "precio": 13,
        "descripcion": "Eaton Vance Municipal Income Trust"
      }, {
        "id": 9,
        "titulo": "Zapas",
        "img": "http://dummyimage.com/102x100.png/dddddd/000000",
        "precio": 53,
        "descripcion": "Blackrock Core Bond Trust"
      }, {
        "id": 10,
        "titulo": "Jean",
        "img": "http://dummyimage.com/127x100.png/cc0000/ffffff",
        "precio": 88,
        "descripcion": "CMS Energy Corporation"
      }
];

const obtenerProductos = () => {
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve(database);
    }, 2000)
  });
};

const getProducto = (idURL) => {
  return new Promise((resolve) => {
    const reqItem = database.find((item)=>{retunr (item.id === parseInt(idURL))})
   
   
    setTimeout(() => {
      if (reqItem) resolve(reqItem);
      else reject('No se encontró el producto')
    }, 2000)
  });
};

const getProductoByCategory = (categoryURL) => {
  return new Promise((resolve) => {
   let reqItems = database.filter(item => item.category === categoryURL);
   setTimeout(() => {
    resolve(reqItems)
   }, 2000)
  });
};

export default obtenerProductos;

export {getProducto, getProductoByCategory};