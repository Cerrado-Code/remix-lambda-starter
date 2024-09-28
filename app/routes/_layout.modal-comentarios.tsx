import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-select";
import { Switch } from "../components/ui/switch";



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const dados = {
  nome: "Silva",
  data: "2024-09-28",
  comentario:
    "Adorei a experiência! O produto superou todas as minhas expectativas.",
};

const onchangeSwitch = () => {
  console.log("onchange")
}


export default function RouteDashboard() {
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
                <div>
                  <PersonIcon className="h-10 w-10" />
                </div>
                <div>
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
                <Select defaultValue="P">
                  <SelectTrigger className="w-[180px] h-12">
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
                <textarea className="w-full border"></textarea>

              </div>
              <div className="flex py-1">
                <p className="text-sm font-bold  w-1/4">Visibilidade:  <Switch
                      checked={true}
                      onCheckedChange={onchangeSwitch}
                      className=" border bg-gray-100 "
                    /></p>             
              </div>
            </div>
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
