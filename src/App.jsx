import './index.css'
import React from "react";
import AcaoSorteio from "./componentes/AcaoSorteio.jsx";
import NumeroSorteado from "./componentes/NumeroSorteado.jsx";
import ColunaNumerica from "./componentes/ColunaNumerica.jsx";
import HeaderLetreiro from "./componentes/HeaderLetreiro.jsx";

class App extends React.Component {
    state = {
        palavraBingo: 'bingo',
        numeros: [],
        qtdeNumerosSorteados: 0,
        numeroRecemSorteado: null
    };

    componentDidMount() {
        let arrayNumeros = [];

        for (let i = 0; i < 75; i++) {
            arrayNumeros.push({
                valor: i + 1,
                sorteado: false,
                letra: null,
                ordem: null
            })
        }

        this.setState({ numeros: arrayNumeros })
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    sortearNumero = () => {
        if (this.state.qtdeNumerosSorteados === 75) {
            alert('Todos os números foram sorteados!')
            return;
        }

        let numeroBingo = null;

        while (true) {
            let numeroSorteado = this.getRandomInt(75) + 1;

            numeroBingo = this.state.numeros[numeroSorteado - 1];

            if (!numeroBingo.sorteado) {
                console.log('Numero sorteado', numeroBingo);

                numeroBingo.sorteado = true;
                numeroBingo.ordem = this.state.qtdeNumerosSorteados + 1;
                break;
            }
        }

        this.setState({ qtdeNumerosSorteados: this.state.qtdeNumerosSorteados + 1, numeroRecemSorteado: numeroBingo });
    }

    handleChangePalavraBingo = (novaPalavraBingo) => {
        this.setState({ palavraBingo: novaPalavraBingo.trim() })
    }

    render() {
        return (
            <div className="flex flex-row justify-center items-center w-screen h-screen">
                <div className="flex flex-col justify-center items-center m-2 text-center w-screen">
                    <AcaoSorteio sortearNumero={this.sortearNumero} />

                    {this.state.numeroRecemSorteado ?  <NumeroSorteado numeroSorteado={this.state.numeroRecemSorteado}/> : ''}

                    <div className="flex flex-row flex-nowrap justify-around items-center m-2 md:w-3/4 lg:w-1/2 bg-teal-200 rounded-md">
                        {this.state.palavraBingo.split('').map((letra, index) => {
                            return <HeaderLetreiro key={index} letra={letra} />
                        })}
                    </div>

                    <div className="flex flex-row flex-nowrap justify-around m-2 md:w-3/4 lg:w-1/2">
                        {this.state.palavraBingo.split('').map((letra, index) => {
                            const posicaoInicial = index * 15;
                            const posicaoFinal = posicaoInicial + 15;

                            const numeros = this.state.numeros.slice(posicaoInicial, posicaoFinal);

                            numeros.forEach((numero) => numero.letra = letra.toUpperCase())

                            return <ColunaNumerica key={index} numeros={numeros} numeroRecemSorteado={this.state.numeroRecemSorteado}/>
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default App; 