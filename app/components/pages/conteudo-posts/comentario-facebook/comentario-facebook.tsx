import { MessageCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

export default function ComentarioFacebook() {
  const [campo, setCampo] = useState(false);
  const abrirMensagem =  () => {
    setCampo(!campo)
  }
  return (
    <div>
    <div className="border-t border-gray-300 pt-2">
      <div className="flex justify-between">
        <div className="flex items-start mb-2">
          <img
            src="https://via.placeholder.com/30"
            alt="Avatar"
            className="rounded-full mr-2"
          ></img>
          <div>
            <span className="font-bold">Comentador 1</span>
            <p className="text-gray-700">Concordo plenamente!</p>
          </div>
        </div>
        <div>
          <MessageCircleIcon onClick={abrirMensagem}/>
        </div>
      </div>
    </div>
    {campo && <div className="flex flex-col gap-y-2">
      <Textarea />
      <div className="flex justify-end">
        <Button> Comentar</Button>
      </div>
      </div>}
    </div>
  );
}
