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
    this.setState({palavraBingo: novaPalavraBingo.trim()})
  }

  render() {
    return (
      <BrowserRouter>
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