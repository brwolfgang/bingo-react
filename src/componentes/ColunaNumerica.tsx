import * as React from 'react';
import Numero from "./Numero";


const ColunaNumerica = ({numeros, numeroRecemSorteado}) => {
    return (
        <div className="flex flex-1 flex-col flex-nowrap items-center justify-center">
            {numeros.map(numero => {
                const ehRecemSorteado = numeroRecemSorteado && numero.valor === numeroRecemSorteado.valor

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

const gerarInfoNumeros = (numero: {valor: number, sorteado: boolean, ordem: number}) => {
    return <Numero key={numero.valor} valor={numero.valor} isSorteado={numero.sorteado} ordem={numero.ordem}/>
}

export default ColunaNumerica;