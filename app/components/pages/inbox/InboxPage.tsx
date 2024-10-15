import { useLocation, useSearchParams } from "@remix-run/react";
import { Settings } from "lucide-react";
import { useEffect, useState } from "react";
import LinkDecorated from "~/components/generic/link-decorated";
import { Button } from "~/components/ui/button";
import { useDebounce } from "~/lib/use-debounce";
import { cn } from "~/lib/utils";
import ViewNovidades from "../view-novidades/view-novidades";

interface InboxListaComentariosProps {
  className?: string;
}
const InboxListaComentarios: React.FC<InboxListaComentariosProps> = ({
  className,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    mudarView('novidades')
    console.log(searchParams)
  }, []);

  

  const mudarView = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    let value: string;

    if (typeof event === "string") {
      value = event;
    } else {
      value = event.target.value;
    }

    setQuery(value);
  };


  useDebounce(
    () => {
      setSearchParams(
        (prev) => {
          if (!query) {
            prev.delete("view");
          } else {
            prev.set("view", query);
          }
          return prev;
        },
        { preventScrollReset: true }
      );
    },
    5,
    [query]
  );

  return (
      <div className={cn(className, "w-full border-b-2")}>
        <div className="flex bg-white justify-between px-10 py-1 items-center ">
          <div className="flex justify-between  gap-x-10 text-center">
            <div className="text-2xl">Caixa de Entrada</div>
            <div>
              <Button onClick={() => mudarView("novidades")}>Novidade</Button>{" "}
              <Button onClick={() => mudarView("lidas")}>Lidas</Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button>Automatizações</Button>
            <LinkDecorated to="/settings">
              <Settings />
            </LinkDecorated>
          </div>
        </div>
      </div>
   );
};

export default InboxListaComentarios;
