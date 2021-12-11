import React from "react";
import ColunaNumerica from "./componentes/ColunaNumerica.jsx";
import HeaderLetreiro from "./componentes/HeaderLetreiro.jsx";

class App extends React.Component {
    state = {
        nomeBingo: 'Bingo da Galera',
        palavraBingo: 'bingo'
    };

    componentDidMount() {
        console.log('Estamos prontos para começar')
    }

    render() {
        return (
            <div className='container mt-3'>
                <div className="card" style={{ width: '100%' }}>
                    <div className="card-body text-center">
                        <div className="form-row">
                            <div className="col-12">
                                <div className="form-group text-left">
                                    <label htmlFor="inputPalavraBingo">Nome do Bingo</label>
                                    <input className="form-control" id="inputPalavraBingo" type="text" value={this.state.palavraBingo} onChange={(e) => this.setState({ palavraBingo: e.target.value })} />
                                    <small id="inputHelp" className="form-text text-muted">Palavras com 5 letras funcionam melhor 👍</small>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-12 text-center">
                                <h5 className="card-title">{this.state.nomeBingo}</h5>
                            </div>
                        </div>

                        <div className="form-row text-center">
                            <div className="col-1"></div>

                            {this.state.palavraBingo.split('').map((letra, index) => {
                                return <HeaderLetreiro key={index} letra={letra} />
                            })}

                            <div className="col-1"></div>
                        </div>

                        <div className="form-row text-center">
                            <div className="col-1"></div>

                            {this.state.palavraBingo.split('').map((letra, index) => {
                                return <ColunaNumerica key={index}/>
                            })}

                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 