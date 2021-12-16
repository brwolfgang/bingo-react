import React from "react";
import jQuery from 'jquery'

class Numero extends React.Component {
        componentDidMount = () => {
                jQuery('[data-toggle="tooltip"]').tooltip()
        }

        render() {
                if (this.props.isSorteado) {
                        return <div className="text-monospace form-text font-weight-bold" title={`Este foi o ${this.props.ordem}º número sorteado`} data-toggle="tooltip">{this.props.valor} <i className="bi bi-check-circle-fill text-success"></i></div>
                } else {
                        return <div className="text-monospace form-text text-muted">{this.props.valor}</div>
                }
        }
}

export default Numero;