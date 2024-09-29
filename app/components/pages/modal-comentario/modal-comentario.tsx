import React, { useState } from "react";

import { Separator } from "@radix-ui/react-select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { Switch } from "~/components/ui/switch";
import { ModalComentarioProps } from "~/types/ui/page_types";
import { cn } from "~/lib/utils";

const ModalComentario: React.FC<ModalComentarioProps> = ({
  dados,
  conteudoBotao,
  className
}) => {
  const [visibilidade, setVisibilidade] = useState(dados.visibilidade ?? false);

  const onchangeSwitch = () => {
    setVisibilidade(!visibilidade);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className={cn(className)}>
          {conteudoBotao ?? "Abrir"}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>
            <div className="flex">
              <div className="pr-5">
                <img
                  className="h-20 w-20  border rounded-full "
                  src="/app/assets/images/user.png"
                  alt="User"
                />
              </div>
              <div className="pt-2">
                <p className="text-xs">{dados.data}</p>
                <p className="text-2xl font-normal">{dados.rede}</p>
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
              <Select defaultValue={dados.sentimento}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Promotor" />
                </SelectTrigger>
                <SelectContent className="border-none bg-white">
                  <SelectItem value="P">Promotor</SelectItem>
                  <SelectItem value="D">Detrator</SelectItem>
                  <SelectItem value="O">Neutro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex py-1">
              <p className="text-sm font-bold  w-1/4">Resposta: </p>
              <Textarea className="w-full border" defaultValue={dados.resposta}></Textarea>
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
  );
};

export default ModalComentario;
