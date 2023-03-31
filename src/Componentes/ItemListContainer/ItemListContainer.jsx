import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

import Item from "./Item"
import './../../services/mockServices.js'
import obtenerProductos, { getProductoByCategory } from "./../../services/mockServices.js";
import Flex from "../Flex/Flex";


export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
    let {categoryid} = useParams();


    useEffect(() => {
        if (!categoryid){
        obtenerProductos()
        .then((respuesta) =>{
            setProducts(respuesta);
        })
        .catch((error) => alert(error));
        }
        else{
            getProductoByCategory(categoryid)
            .the((respuesta) =>{
                setProducts(respuesta);
            })
        }
    }, [categoryid]);
    return(
    
        <Flex>
        {products.map((itemIterado)=>{
            return <Item key={itemIterado.id} item={itemIterado} />   
        })}
    </Flex>
    )
}