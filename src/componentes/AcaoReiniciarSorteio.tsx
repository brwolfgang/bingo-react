import * as React from 'react';

const AcaoSorteio = (props: {reiniciarSorteio: () => void}) => {
    return (
        <button className="text-white bg-red-400 hover:text-white hover:bg-red-700 px-2 py-1 m-1 rounded-md shadow" onClick={props.reiniciarSorteio}>Reiniciar Sorteio!</button>
    )
}

export default AcaoSorteio;