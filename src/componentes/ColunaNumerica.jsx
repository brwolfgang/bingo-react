import React from "react";
import Numero from "./Numero";

const ColunaNumerica = ({numeros}) => {
    return(
        <div className="col-2">
            {numeros.map(numero => {
               return <Numero key={numero.valor} valor={numero.valor} isSorteado={numero.sorteado}/>
            })}
        </div>
    )
}

export default ColunaNumerica;