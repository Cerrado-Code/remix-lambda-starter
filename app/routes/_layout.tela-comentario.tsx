import React from "react";
import TableComentarios from "../components/pages/table-comentarios/tabela-comentarios";
import FiltroComentarios from "../components/pages/filtros.tsx/filtro-comentarios";
import BarraRelatorioQuantidades from "../components/pages/barra-relatorio/barra-relatorios";
import { Separator } from "@radix-ui/react-select";

export default function RouteComentarios() {
  return (
    <div className="flex flex-col items-center w-3/4  m-10">
        <BarraRelatorioQuantidades className="w-[85%]"></BarraRelatorioQuantidades>
        <Separator className="border w-[90%] self-center"></Separator>
        <FiltroComentarios></FiltroComentarios>
        <TableComentarios ></TableComentarios>
    </div>
  );
}
