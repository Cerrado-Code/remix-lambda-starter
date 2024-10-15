import React from "react";
import TableComentarios from "../components/pages/table-comentarios/tabela-comentarios";
import FiltroComentarios from "../components/pages/filtros.tsx/filtro-comentarios";
import BarraRelatorioQuantidades from "../components/pages/barra-relatorio/barra-relatorios";
import { Separator } from "@radix-ui/react-select";
import NavigationBar from "~/components/pages/navigation/navbar-inbox/navbar-inbox";

export default function RouteComentarios() {
  return (
    
    <div className="flex flex-col items-center">
       <div className="w-full">
        <NavigationBar />
      </div >
      <div className="conteiner w-4/6 pt-10">
        <BarraRelatorioQuantidades className="w-[85%]"></BarraRelatorioQuantidades>
        <Separator className="border w-[90%] self-center"></Separator>
        <FiltroComentarios></FiltroComentarios>
        <TableComentarios ></TableComentarios>
    </div>
    </div>
  );
}
