import { useState } from "react"
import Button from "../Button/Button"
// import card from './card.css'

export default function Item(props){

    const {titulo, precio, img, descripcion} = props.item;

    return(
        <div>
            <img src="{img}" alt="{titulo}" />
            <h3>{titulo}</h3>
            <br />
            <h3>$ {precio}</h3>
            <small>{descripcion}</small>
            <Button>
                Ver más
            </Button>
        </div>
    )
}