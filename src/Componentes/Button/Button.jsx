import React from 'react'
import './button.css'
export default function Button(props){
    let [click, setClick] = React.useState('Agregar');

    function userClick(evt){
        setClick('Agregado');
    }
    return(
        <button onClick={userClick} className='btn' >{click}</button>
    )
}