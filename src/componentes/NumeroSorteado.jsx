import React from "react";

const NumeroSorteado = ({numeroSorteado}) => {
    return (
        <div className="form-row">
            <div className="col-12 text-center">
                <div className="form-group">
                    <h3>Número sorteado:</h3>
                    <h1 className="text-monospace">{numeroSorteado.letra} {numeroSorteado.valor}</h1>
                </div>
            </div>
        </div>
    )
}

export default NumeroSorteado;