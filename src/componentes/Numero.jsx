import React from "react";

class Numero extends React.Component {
    render() {
        if (this.props.isSorteado) {
            return (
                <div className="text-monospace form-text font-weight-bold"
                     title={`Este foi o ${this.props.ordem}º número sorteado`}>{this.props.valor} <i className="bi bi-check-circle-fill text-success"/></div>
            )
        } else {
            return <div className="text-monospace form-text text-muted">{this.props.valor}</div>
        }
    }
}

export default Numero;