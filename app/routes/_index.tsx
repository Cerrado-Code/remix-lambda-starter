import { Link } from "@remix-run/react";
import React from "react";
import { useAuth } from "../lib/auth-hook";

export default function Index() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="flex flex-col">
      <Link to="/login" className="">
        <button>Login</button>
      </Link>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
      <Link to="/modal-comentarios">
        <button>Tela Comentario</button>
      </Link>
      <Link to="/tela-comentario">
        <button>Listagem Comentarios</button>
      </Link>
    </div>
  );
}
