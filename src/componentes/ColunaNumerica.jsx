import React from "react";
import Numero from "./Numero";

const ColunaNumerica = ({numeros, numeroRecemSorteado}) => {
    return (
        <div className="flex flex-col flex-nowrap items-center justify-center">
            {numeros.map(numero => {
                const ehRecemSorteado = numeroRecemSorteado && numero.valor === numeroRecemSorteado.valor

                if (ehRecemSorteado) {
                    return (
                        <div className="px-2 py-1 bg-yellow-400 rounded-md">
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

const gerarInfoNumeros = (numero) => {
    return <Numero key={numero.valor} valor={numero.valor} isSorteado={numero.sorteado} ordem={numero.ordem}/>
}

export default ColunaNumerica;