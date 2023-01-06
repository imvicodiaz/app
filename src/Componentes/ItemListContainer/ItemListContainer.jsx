import { useState, useEffect } from "react";

import Flex from "../Flex/Flex"
import Item from "./Item"
import './../../services/mockServices.js'
import obtenerProductos  from "./../../services/mockServices.js";
import Promise from './../../services/mockServices'

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);

    console.log('%cReenderizando ItemListContainer');

    useEffect(() => {
        obtenerProductos().then((respuesta) =>{
            setProducts(respuesta);
        });
    }, []);
 
    return(
    <>
    {
        products.map((itemIterado)=>{
            return <Item key={itemIterado.id} item={itemIterado} />
        })
    }
    </>
    )
}