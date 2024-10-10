import { useSearchParams } from "@remix-run/react";
import { Settings } from "lucide-react";
import { useEffect, useState } from "react";
import LinkDecorated from "~/components/generic/link-decorated";
import { Button } from "~/components/ui/button";
import { useDebounce } from "~/lib/use-debounce";
import { cn } from "~/lib/utils";

interface InboxPageProps {
  className: string | undefined;
}
const InboxPage: React.FC<InboxPageProps> = ({ className }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("view") || "";
  const [query, setQuery] = useState("");

  const mudarView = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    let value: string;

    if (typeof event === "string") {
      value = event;
    } else {
      value = event.target.value;
    }

    setQuery(value);
  };

  useEffect(() => {
    setQuery('novidades');
  }, [])
  

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
    <div className={cn(className, "w-full")}>
      <div className="flex bg-white justify-between px-10 py-1 items-center ">
        <div className="flex justify-between  gap-x-10 text-center">
          <div className="text-2xl">Caixa de Entrada</div>
          <div>
            <Button onClick={() => mudarView("novidades")}>Novidade</Button>{" "}
            <Button onClick={() => mudarView("lidas")}>Lidas</Button>
          </div>
        </div>
        <div>
          <LinkDecorated to="/settings">
            <Settings />
          </LinkDecorated>
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
