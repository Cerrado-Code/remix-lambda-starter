import { Link } from "@remix-run/react";
import React from "react";

export default function NavigationBar() {
  return (
      <nav
        id="header"
        className="w-full z-30 top-10 py-5 bg-white shadow-lg border-b flex justify-center"
      >
        <div className="w-2/4 flex items-center justify-between mt-0 px-6">

          <input className="hidden" type="checkbox" id="menu-toggle"></input>

          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                <li>
                  <Link
                    className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2"
                    to="#"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2"
                    to="#"
                  >
                    Planos
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2"
                    to="#"
                  >
                    Integrações
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
            id="nav-content"
          >
            <div className="auth flex items-center w-full md:w-full">
              <button className="bg-transparent text-gray-800  p-2 px-5 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
}
