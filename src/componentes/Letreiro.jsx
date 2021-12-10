import React from "react";

const Letreiro = (props) => {
    const letreiro = props.letras.split('').map(letra => {
        return (
            <div key={letra} className="col-2">
                <div className="form-group">
                    <dt>Letra</dt>
                    <dd>{letra.toUpperCase()}</dd>
                </div>
            </div>
        )
    })

    return (
        // Usa as 10 colunas do meio da tela
        <div className="form-row">
            <div className="col"></div>
            {letreiro}
            <div className="col"></div>
        </div>
    )
}

export default Letreiro;