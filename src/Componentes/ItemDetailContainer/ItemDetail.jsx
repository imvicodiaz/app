import React from "react";
import ItemCount from './../ItemCount/ItemCount'
import './itemDetail.css'

function ItemDetail({titulo, precio, img, descripcion}){
    return(
        <div className="cardDetail">
            <img src="{img}" alt="{titulo}" />
            <h3>{titulo}</h3>
            <br />
            <h3>$ {precio}</h3>
            <small>{descripcion}</small>
            <ItemCount/>
        </div>

    );
}

export default ItemDetail; 