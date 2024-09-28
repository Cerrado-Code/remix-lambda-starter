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

export default function TableComentarios() {
  const tableContent = [
    {
      id: 1,
      rede: "Facebook",
      comentario:
        "Adorei o produto! Ele superou minhas expectativas e o atendimento foi excelente!",
      sentimento: "positivo",
    },
    {
      id: 2,
      rede: "Instagram",
      comentario:
        "Estou tão decepcionada com isso... A qualidade não é nada do que eu esperava.",
      sentimento: "negativo",
    },
    {
      id: 3,
      rede: "LinkedIn",
      comentario:
        "Produto incrível! Com certeza, uma adição valiosa ao meu trabalho.",
      sentimento: "positivo",
    },
    {
      id: 4,
      rede: "TikTok",
      comentario: "Totalmente desapontada. Não valeu a pena!",
      sentimento: "negativo",
    },
    {
      id: 5,
      rede: "Pinterest",
      comentario: "Simplesmente amei! Super recomendo para quem ama DIY.",
      sentimento: "positivo",
    },
    {
      id: 6,
      rede: "Twitter X",
      comentario: "Péssima experiência. Não compre!",
      sentimento: "negativo",
    },
    {
      id: 7,
      rede: "Bluesky",
      comentario: "Esse produto é tudo! Já quero mais!",
      sentimento: "positivo",
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
                    <TableCell>
                      <Button>A1</Button>
                      <Button>A1</Button>
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
