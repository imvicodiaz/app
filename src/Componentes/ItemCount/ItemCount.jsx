import { useState } from "react";


export default function BotonMasMenos(){
    const [count, setCount]= useState(0)

    function clickMas(){
        setCount(count +1)
    }

    function clickMenos(){
        setCount(count -1)
    }

    return(
        <div>
          <h4>Agregar cantidad de Productos</h4>
            <button onClick={clickMenos}>-</button>
            <p> {count}</p>
            <button onClick={clickMas}>+</button>
        </div>
    )
}