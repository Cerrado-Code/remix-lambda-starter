import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Separator } from "@radix-ui/react-select";
import { Switch } from '../components/ui/switch'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Textarea } from "~/components/ui/textarea";


export default function RouteDashboard() {

  const dados = {
    nome: "Silva",
    data: "2024-09-28",
    comentario:
      "Adorei a experiência! O produto superou todas as minhas expectativas.",
    visibilidade:true
  };
  
  

  const [visibilidade, setVisibilidade] = useState(dados.visibilidade);

  const onchangeSwitch = () => {
    setVisibilidade(!visibilidade)
  };
    return (
    <div className="flex flex-col items-center m-28">
      <Dialog>
        <DialogTrigger>
          <Button className="border hover:bg-slate-100 active:bg-slate-200">
            Open
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>
              <div className="flex">
                <div className="pr-5">
                <img className="h-20 w-20  border rounded-full " src="/app/assets/images/user.png" alt="User" />
                </div>
                <div  className="pt-2">
                  <p className="text-xs">28/07/2024 17:30</p>
                  <p className="text-2xl font-normal">Legenda da Publicação</p>
                </div>
              </div>
              <Separator className="border mt-3" />
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <div className="py-5">
              <p className="text-sm font-bold py-1">
                Usuario: <span className=" font-normal"> {dados.nome}</span>
              </p>
              <div className="flex py-1">
                <p className="text-sm font-bold  w-1/4">Comentario: </p>
                <span className=" font-normal"> {dados.comentario}</span>
              </div>
              <p className="text-sm font-bold w-2/4 py-">
                Data: <span className=" font-normal"> {dados.data}</span>
              </p>
            </div>
            <Separator className="border mt-3" />
            <div className="py-5">
              <div className="flex py-1">
                <p className="text-sm font-bold  w-1/4">Sentimento: </p>
                <Select defaultValue="P" >
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Promotor" />
                  </SelectTrigger>
                  <SelectContent className="border-none bg-white">
                    <SelectItem value="P">Promotor</SelectItem>
                    <SelectItem value="D">Detrator</SelectItem>
                    <SelectItem value="N">Neutro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex py-1">
                <p className="text-sm font-bold  w-1/4">Comentario: </p>
                <Textarea className="w-full border"></Textarea>
              </div>
              <div className="flex py-2 mt-5">
                <p className="text-sm font-bold  w-1/4">Visibilidade:</p>
                <Switch
                  checked={visibilidade}
                  onCheckedChange={onchangeSwitch}
                  className="border"
                />
              </div>
            </div>
            <Separator className="border mt-3" />
          </DialogDescription>
          <DialogFooter>
            <Button className="border hover:bg-slate-100 active:bg-slate-200">
              Enviar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
