import React from "react";

const AcaoSorteio = ({sortearNumero}) => {
    return (
        <div className="form-row">
            <div className="col-12">
                <div className="form-group">
                    <button className="btn btn-primary" onClick={sortearNumero}>Sortear Número!</button>
                </div>
            </div>
        </div>
    )
}

export default AcaoSorteio;