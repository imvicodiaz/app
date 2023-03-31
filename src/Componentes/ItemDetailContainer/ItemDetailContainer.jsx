import React, { useState, useEffect } from "react";
import { getProduct } from "../../services/mockServices";
import obtenerProductos, { getProducto } from "../../services/mockServices";
import ItemDetail from './ItemDetail'

function ItemDetailContainer(){
    const [product, setProduct] = useState([]);

    useEffect(() =>{
      getProducto()
        .then((respuesta) =>{
            setProduct(respuesta);
        })
        .catch((error) => alert(error));
    }, []);

    return (
    <ItemDetail 
      title={product.titulo}
      img={product.img}
      precio={product.precio}
      descripcion={product.descripcion}
    />
    );
}

export default ItemDetailContainer;