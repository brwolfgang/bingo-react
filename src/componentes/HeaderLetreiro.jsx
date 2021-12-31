import React from "react";

const estiloLetra = {
    fontSize: '36px',
    fontFamily: 'monospace'
}

const HeaderLetreiro = (props) => {
    return (
        <div className="flex flex-col flex-nowrap py-1 items-center">
            <dt>Letra</dt>
            <dd style={estiloLetra}>{props.letra.toUpperCase()}</dd>
        </div>
    )
}

export default HeaderLetreiro;