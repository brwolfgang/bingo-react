import * as React from 'react';
import {Outlet, Link} from "react-router-dom";

class RouteLayout extends React.Component {
  render() {
    return (
      <>
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link to="/" className="bg-gray-600 hover:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Bingo</Link>
                    <Link to="/config" className="bg-gray-600 hover:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Configurações</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
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