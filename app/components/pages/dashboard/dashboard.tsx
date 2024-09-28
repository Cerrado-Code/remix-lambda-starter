import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { ChartConfig, ChartContainer } from "../../ui/chart";

import { Button } from "../../ui/button";
import { Bar, BarChart } from "recharts";

export default function Dashboard() {
  const chartConfig = {
    positivo: {
      label: "Positivo",
      color: "#5f98d8",
    },
    negativo: {
      label: "Negativo",
      color: "#efa5a5",
    },
    inconclusivo: {
      label: "Inconclusivo",
      color: "#b8b8b8",
    },
  } satisfies ChartConfig;

  const chartData = [
    { positivo: 186, negativo: 30, inconclusivo: 80  },
  ];

  const sistemasCadastrados = [
    { id: 1, nome: "Facebook", img: "assets/facebook.svg" },
    { id: 2, nome: "Instagram", img: "assets/instagram.svg" },
    { id: 3, nome: "LinkedIn", img: "assets/linkedin.svg" },
    { id: 4, nome: "Twitter - X", img: "assets/x.svg" },
    { id: 5, nome: "TikTok", img: "assets/tiktok.svg" },
    { id: 6, nome: "YouTube", img: "assets/youtube.svg" },
  ];

  return (
    <div className="flex  flex-wrap w-full justify-between">
      {sistemasCadastrados &&
        sistemasCadastrados.map((sistema) => {
          return (
            <div key={sistema.id} className=" w-full sm:w-[49%] md:w-[32%] m-1">
              <Card className="h-80 ">
                <CardHeader>
                  <CardTitle> {sistema.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs
                    defaultValue="gerenciar"
                    className="w-full border-slate-100"
                  >
                    <TabsList>
                      <TabsTrigger value="gerenciar">Gerenciar</TabsTrigger>
                      <TabsTrigger value="estatisticas">
                        Estatisticas
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="gerenciar" className="flex-wrap flex flex-col justify-between p-2 ">
                      <div className="min-h-28 text-md ">
                      Gerenciar suas conexões para essa rede social.
                      </div>
                      <Button className="hover:bg-slate-100 active:bg-slate-200 border py-5">Gerenciar</Button>
                    </TabsContent>
                    <TabsContent value="estatisticas"  className="text-md flex flex-col ">
                      <ChartContainer config={chartConfig} className="w-[90%]">
                        <BarChart accessibilityLayer data={chartData}>
                          <Bar
                            dataKey="positivo"
                            fill="var(--color-positivo)"
                            radius={4}
                          />
                          <Bar
                            dataKey="negativo"
                            fill="var(--color-negativo)"
                            radius={4}
                          />
                           <Bar
                            dataKey="inconclusivo"
                            fill="var(--color-inconclusivo)"
                            radius={4}
                          />
                        </BarChart>
                      </ChartContainer>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
