import * as React from 'react';
import {Outlet} from "react-router-dom";

class RouteLayout extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex flex-col justify-center items-center m-2 text-center w-full">
          <Outlet/>
        </div>
      </div>
    );
  }
}

export default RouteLayout;