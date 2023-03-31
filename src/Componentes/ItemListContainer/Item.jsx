import { useState } from "react"
import Button from "../Button/Button"
import item from './item.css'
import {Link} from 'react-router-dom'


export default function Item(props){

    const {titulo, precio, img, descripcion, id} = props.item;

    return(
        <div className="card">
            <img src="{img}" alt="{titulo}" />
            <h3>{titulo}</h3>
            <br />
            <h3>$ {precio}</h3>
            <small>{descripcion}</small>
            <link to={`/detalle/${id}`}>
            <Button>
                Ver más
            </Button>
            </link>
        </div>
    )
}