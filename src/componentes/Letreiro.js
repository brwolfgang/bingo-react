import React from "react";

const Letreiro = (props) => {
    const letreiro = props.letras.split('').map(letra => {
        return (
            <div key={letra}>{letra.toUpperCase()}</div>
        )
    })

    return (
        <div>{letreiro}</div>
    )
}

export default Letreiro;