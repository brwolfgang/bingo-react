import React from "react";

const NumeroSorteado = ({numeroSorteado}) => {
    return (
        <div className="flex flex-col border-teal-500 m-2 py-1 px-2 border-2 rounded-md">
            <p className="text-3xl">Número sorteado:</p>
            <h1 className="text-4xl font-mono">{numeroSorteado.letra} {numeroSorteado.valor}</h1>
        </div>
    )
}

export default NumeroSorteado;