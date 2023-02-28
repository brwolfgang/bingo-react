import * as React from 'react';
import AcaoSorteio from "../componentes/AcaoSorteio";
import AcaoReiniciarSorteio from "../componentes/AcaoReiniciarSorteio";
import NumeroSorteado from "../componentes/NumeroSorteado";
import HeaderLetreiro from "../componentes/HeaderLetreiro";
import ColunaNumerica from "../componentes/ColunaNumerica";
import {NumeroSorteadoType, PainelBingoProps, PainelBingoState} from "../types";

export default class RoutePainelBingo extends React.Component<PainelBingoProps, PainelBingoState> {
  constructor(props: any) {
    super(props);

    this.state = {
      numeros: [],
      qtdeNumerosSorteados: 0,
      numeroRecemSorteado: undefined,
    }
  }

  componentDidMount() {
    let arrayNumeros: NumeroSorteadoType[] = [];

    for (let i = 0; i < 75; i++) {
      arrayNumeros.push({
        valor: i + 1,
        sorteado: false,
        letra: undefined,
        ordem: undefined
      })
    }

    this.setState({numeros: arrayNumeros, numeroRecemSorteado: undefined, qtdeNumerosSorteados: 0})
  }

  getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  sortearNumero = () => {
    if (this.state.qtdeNumerosSorteados === 75) {
      alert('Todos os números foram sorteados!')
      return;
    }

    let numeroBingo: NumeroSorteadoType;

    while (true) {
      let numeroSorteado = this.getRandomInt(75) + 1;

      numeroBingo = this.state.numeros[numeroSorteado - 1];

      if (!numeroBingo.sorteado) {
        numeroBingo.sorteado = true;
        numeroBingo.ordem = this.state.qtdeNumerosSorteados + 1;
        console.log('Numero sorteado', numeroBingo);
        break;
      }
    }

    this.setState({qtdeNumerosSorteados: this.state.qtdeNumerosSorteados + 1, numeroRecemSorteado: numeroBingo});
  }

  handleReinicioSorteio = () => {
    if (window.confirm('Confirma o reinício do Sorteio? O progresso atual será perdido!')) {
      this.componentDidMount();
    }
  }

  render() {
    return (
      <>
        <div className="flex flex-row flex-nowrap">
          {this.state.qtdeNumerosSorteados <= 75 ? <AcaoSorteio sortearNumero={this.sortearNumero}/> : null}

          <AcaoReiniciarSorteio reiniciarSorteio={this.handleReinicioSorteio}/>

          {/*<button className="text-white m-1 px-2 py-1 bg-gray-500 hover:bg-gray-600 rounded-md"*/}
          {/*        onClick={() => this.setState({exibirConfiguracao: !this.state.exibirConfiguracao})}>Configurações*/}
          {/*</button>*/}
        </div>

        {this.state.numeroRecemSorteado ? <NumeroSorteado numeroSorteado={this.state.numeroRecemSorteado}/> : ''}

        <div className="flex flex-row flex-nowrap justify-around items-center m-2 w-3/4 md:w-1/2">
          {this.props.palavraBingo.split('').map((letra, index) => {
            return <HeaderLetreiro key={index} letra={letra}/>
          })}
        </div>

        <div className="flex flex-row flex-nowrap justify-around m-2 w-3/4 md:w-1/2">
          {this.props.palavraBingo.split('').map((letra, index) => {
            const posicaoInicial = index * 15;
            const posicaoFinal = posicaoInicial + 15;

            const numeros: NumeroSorteadoType[] = this.state.numeros.slice(posicaoInicial, posicaoFinal);

            numeros.forEach((numero) => numero.letra = letra.toUpperCase())

            return <ColunaNumerica key={index} numeros={numeros} numeroRecemSorteado={this.state.numeroRecemSorteado}/>
          })}
        </div>
      </>
    );
  }
}