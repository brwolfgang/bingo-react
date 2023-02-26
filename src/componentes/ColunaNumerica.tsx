import * as React from 'react';
import Numero from "./Numero";
import {NumeroSorteadoType} from "../types";


const ColunaNumerica = (props: {numeros: NumeroSorteadoType[], numeroRecemSorteado?: NumeroSorteadoType}) => {
    return (
        <div className="flex flex-1 flex-col flex-nowrap items-center justify-center">
            {props.numeros.map(numero => {
                const ehRecemSorteado = props.numeroRecemSorteado && numero.valor === props.numeroRecemSorteado.valor

                if (ehRecemSorteado) {
                    return (
                        <div className="bg-yellow-400 rounded-md shadow">
                            {gerarInfoNumeros(numero)}
                        </div>
                    );
                } else {
                    return gerarInfoNumeros(numero)
                }
            })}
        </div>
    )
}

const gerarInfoNumeros = (numero: NumeroSorteadoType) => {
    return <Numero key={numero.valor} valor={numero.valor} isSorteado={numero.sorteado} ordem={numero.ordem}/>
}

export default ColunaNumerica;