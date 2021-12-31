import React from "react";

const estiloLetra = {
    fontSize: '36px',
    fontFamily: 'monospace'
}

const HeaderLetreiro = (props) => {
    return (
        <div className="col-2">
            <div className="form-group">
                <dt>Letra</dt>
                <dd style={estiloLetra}>{props.letra.toUpperCase()}</dd>
            </div>
        </div>
    )
}

export default HeaderLetreiro;