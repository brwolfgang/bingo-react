import './index.css'
import * as React from 'react';
import RouteConfiguracao from "./pages/RouteConfiguracao";
import {AppState} from "./types";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RouteLayout from "./pages/RouteLayout";
import RoutePainelBingo from "./pages/RoutePainelBingo";

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      palavraBingo: 'bingo',
    }
  }

  handleChangePalavraBingo = (novaPalavraBingo: string) => {
    if (!isEmpty(novaPalavraBingo)) {
      this.setState({palavraBingo: novaPalavraBingo.trim()})
    } else {
      alert("A nova palavra não pode ser vazia")
    }
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* Corrige tela em branco após instalação do Github Pages: https://stackoverflow.com/questions/54427793/getting-blank-page-after-react-app-publish-in-github */}
        <Routes>
          <Route path="/" element={<RouteLayout/>}>
            <Route index element={<RoutePainelBingo palavraBingo={this.state.palavraBingo}/>}/>
            <Route path="config" element={<RouteConfiguracao
              palavraBingo={this.state.palavraBingo}
              handleChangePalavraBingo={this.handleChangePalavraBingo}/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;