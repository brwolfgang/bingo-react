import React from "react";

const Numero = ({valor, isSorteado}) => {
        if (isSorteado) {
                return <div className="text-monospace form-text font-weight-bold">{valor} <i className="bi bi-check-circle-fill text-success"></i></div>
        } else {
                return <div className="text-monospace form-text text-muted">{valor}</div>
        }
}

export default Numero;