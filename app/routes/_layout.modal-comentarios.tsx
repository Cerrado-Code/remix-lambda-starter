import { SheetIcon } from "lucide-react";
import React from "react";
import ModalComentario from "~/components/pages/modal-comentario/modal-comentario";

export default function RouteDashboard() {
  const dados = {
    nome: "Silva",
    data: "2024-09-28",
    id: 6,
    rede: "Twitter X",
    comentario: "Adorei a experiência! O produto superou todas as minhas expectativas.",
    sentimento: "D",
    visibilidade: true,
  };
  return (
    <div className="flex flex-col items-center m-28">
      <ModalComentario dados={dados} conteudoBotao={<SheetIcon />}></ModalComentario>
    </div>
  );
}
