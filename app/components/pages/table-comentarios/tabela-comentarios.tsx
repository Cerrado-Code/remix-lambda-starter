import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import ModalComentario from "../modal-comentario/modal-comentario";
import { Eye, EyeOff, NotepadText} from "lucide-react";

export default function TableComentarios() {
  const tableContent = [
    {
      id: 1,
      rede: "Facebook",
      comentario:
        "Adorei o produto! Ele superou minhas expectativas e o atendimento foi excelente!",
      sentimento: "P",
      nome: "Silva",
      data: "2024-09-28",
      visibilidade:false,
      resposta: "Que legal!"
    },
    {
      id: 2,
      rede: "Instagram",
      comentario:
        "Estou tão decepcionada com isso... A qualidade não é nada do que eu esperava.",
      sentimento: "D",
      nome: "Silva",
      data: "2024-09-28",
      visibilidade:true
    },
    {
      id: 3,
      rede: "LinkedIn",
      comentario:
        "Produto incrível! Com certeza, uma adição valiosa ao meu trabalho.",
      sentimento: "P",
      nome: "Silva",
      data: "2024-09-28",
      visibilidade:false
    },
    {
      id: 4,
      rede: "TikTok",
      comentario: "Totalmente desapontada. Não valeu a pena!",
      sentimento: "D",
      nome: "Silva",
      data: "2024-09-28",
      visibilidade:true
    },
    {
      id: 5,
      rede: "Pinterest",
      comentario: "Simplesmente amei! Super recomendo para quem ama DIY.",
      sentimento: "P",
      nome: "Silva",
      data: "2024-09-28",
      visibilidade:true
    },
    {
      id: 6,
      rede: "Twitter X",
      comentario: "Péssima experiência. Não compre!",
      sentimento: "D",
      nome: "Silva",
      data: "2024-09-28",
      visibilidade:false
    },
    {
      id: 7,
      rede: "Bluesky",
      comentario: "Esse produto é tudo! Já quero mais!",
      sentimento: "O",
      nome: "Silva",
      data: "2024-09-28",
      visibilidade:true
    },
  ];

  return (
    <Card className="w-full">
      <CardContent>
        <Table>
          <TableHeader>
            <TableHead className="text-center">Rede</TableHead>
            <TableHead className="text-center">Comentário</TableHead>
            <TableHead className="text-center">Sentimento</TableHead>
            <TableHead className="text-center">Ação</TableHead>
          </TableHeader>
          <TableBody>
            {tableContent &&
              tableContent.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell>{row.rede}</TableCell>
                    <TableCell>{row.comentario}</TableCell>
                    <TableCell>{row.sentimento}</TableCell>
                    <TableCell className="flex  justify-evenly">
                      <ModalComentario dados={row} conteudoBotao={<NotepadText />}></ModalComentario>
                      {!row.visibilidade && <Button onClick={() => alert("Visivel")}><Eye /></Button>}
                      {row.visibilidade && <Button onClick={() => alert("Invisivel")}><EyeOff /></Button>}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
