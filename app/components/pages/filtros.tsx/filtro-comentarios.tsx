import React, { useState } from "react";
import { useDebounce } from "../../../lib/use-debounce";
import { useSearchParams } from "@remix-run/react";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Card, CardContent, CardTitle } from "../../ui/card";

export default function FiltroComentarios() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [query, setQuery] = useState(searchQuery);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | string
  ) => {
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
            prev.delete("search");
          } else {
            prev.set("search", query);
          }
          return prev;
        },
        { preventScrollReset: true }
      );
    },
    500,
    [query]
  );

  return (
    <div className="flex justify-between  py-5 mb-2 w-full">
      <div className="flex">
        <Button
          className="mx-2 border hover:bg-slate-100 active:bg-slate-200"
          onClick={() => handleChange("novos")}
        >
          Novos
        </Button>
        <Button
          className="mx-2 border hover:bg-slate-100 active:bg-slate-200"
          onClick={() => handleChange("pendentes")}
        >
          Pendentes
        </Button>
        <Button
          className="mx-2 border hover:bg-slate-100 active:bg-slate-200"
          onClick={() => handleChange("positivos")}
        >
          Positivos
        </Button>
        <Button
          className="mx-2 border hover:bg-slate-100 active:bg-slate-200"
          onClick={() => handleChange("negativos")}
        >
          Negativos
        </Button>
      </div>
      <div className="flex justify-evenly">
        <div className="px-2">
          <Select defaultValue="mais-novos">
            <SelectTrigger className="w-[180px] h-12">
              <SelectValue placeholder="mais-novos" />
            </SelectTrigger>
            <SelectContent className="border-none bg-white">
              <SelectItem value="mais-novos">Mais Novos</SelectItem>
              <SelectItem value="mais-antigos">Mais Antigos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="px-2">
          <Select defaultValue="25">
            <SelectTrigger className="w-[180px] h-12">
              <SelectValue placeholder="25 per page" />
            </SelectTrigger>
            <SelectContent className="border-none bg-white">
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
