import React from "react";
import Letreiro from "./componentes/Letreiro";

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
                                <div className="form-group">
                                    <label htmlFor="">Nome do Bingo</label>
                                    <input type="text" value={this.state.palavraBingo} onChange={(e) => this.setState({palavraBingo : e.target.value})}/>
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