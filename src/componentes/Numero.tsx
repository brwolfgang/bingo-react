import React from "react";
import IconCheck from "../icons/IconCheck";
import {NumeroProps} from "../types";

class Numero extends React.Component<NumeroProps, any> {
    render() {
        if (this.props.isSorteado) {
            return (
                <div className="flex flex-row flex-nowrap items-center px-2 py-1" title={`Este foi o ${this.props.ordem}º número sorteado`}>
                    <p className="font-mono font-bold">{this.props.valor}</p>
                    <IconCheck classeCor="text-green-600"/>
                </div>
            )
        } else {
            return <div className="font-mono text-gray-300 px2 py-1">{this.props.valor}</div>
        }
    }
}

export default Numero;