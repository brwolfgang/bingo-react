import * as React from 'react';
import {Outlet, Link} from "react-router-dom";

class RouteLayout extends React.Component {
  render() {
    return (
      <>
        <div className="flex justify-around items-center">
          <Link to="/">Bingo</Link>
          <Link to="/config">Configurações</Link>
        </div>
      <div className="flex flex-col items-center w-screen h-screen">
        <div className="flex flex-col items-center m-2 text-center w-full">
          <Outlet/>
        </div>
      </div>
      </>
    );
  }
}

export default RouteLayout;