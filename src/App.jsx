import React from "react";
import Letreiro from "./componentes/Letreiro.jsx";

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
                                    <input className="form-control" id="inputPalavraBingo" type="text" value={this.state.palavraBingo} onChange={(e) => this.setState({palavraBingo : e.target.value})}/>
                                    <small id="inputHelp" class="form-text text-muted">Palavras com 5 letras funcionam bem 👍</small>
                                </div>
                            </div>
                        </div>

                        <h5 className="card-title">{this.state.nomeBingo}</h5>
                        <Letreiro letras={this.state.palavraBingo}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;