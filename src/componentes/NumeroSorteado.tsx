import * as React from 'react';
import {NumeroSorteadoType} from "../types";

const NumeroSorteado = (props: {numeroSorteado: NumeroSorteadoType}) => {
    return (
        <div className="flex flex-col bg-yellow-400 m-2 py-1 px-2 rounded-md shadow">
            <p className="text-3xl">Número Sorteado</p>
            <h1 className="text-4xl font-mono">{props.numeroSorteado.letra} {props.numeroSorteado.valor}</h1>
        </div>
    )
}

export default NumeroSorteado;