import React from "react";
import { cn } from "../../../lib/utils";


interface BarraRelatorioQuantidadesProps {
    className?: string;
}

const BarraRelatorioQuantidades: React.FC<BarraRelatorioQuantidadesProps> = ({ className }) => {
 
  const redesSociais = [
    {"nome": "Facebook", "qtd": 120},
    {"nome": "Instagram", "qtd": 250},
    {"nome": "LinkedIn", "qtd": 873},
    {"nome": "TikTok", "qtd": 306},
    {"nome": "Pinterest", "qtd": 150},
    {"nome": "Twitter X", "qtd": 204},
    {"nome": "Bluesky", "qtd": 55}
  ];

  return (
    <div className={cn(className, 'flex justify-between  py-5 mb-2 w-full')}>
        <div className="text-center">
                <p className="text-lg font-bold">1958</p>
                <p className="text-sm">Total</p>
            </div>
      {redesSociais && redesSociais.map((rede, index) => {
        return(
            <div key={index} className="text-center">
                <p className="text-lg font-bold">{rede.qtd}</p>
                <p className="text-sm">{rede.nome}</p>
            </div>
        )
      })}
    </div>
  );
}
export default BarraRelatorioQuantidades;
