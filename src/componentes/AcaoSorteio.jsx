import React from "react";

const AcaoSorteio = ({sortearNumero}) => {
    return (
        <button className="text-white bg-teal-600 hover:bg-teal-700 px-2 py-1 m-1 rounded-md shadow" onClick={sortearNumero}>Sortear Número!</button>
    )
}

export default AcaoSorteio;