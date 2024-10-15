import { Link } from "~/components/ui/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import ListaComentariosNovos from "../lista-comentarios-novos/lista-comentarios-novos";

interface ViewNovidadesProps {
    className?: string ;
  }

const  ViewNovidades: React.FC<ViewNovidadesProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Tabs defaultValue="novas"  >
        <TabsList className="flex justify-between bg-white rounded-none py-5 ">
          <TabsTrigger value="novas" className={cn('w-full rounded-none')}>Novas</TabsTrigger>
          <TabsTrigger value="designadas" className={cn('w-full rounded-none')}>Designadas</TabsTrigger>
          <TabsTrigger value="todas" className={cn('w-full rounded-none')}>Todas</TabsTrigger>
        </TabsList>
        <TabsContent value="novas" className="m-0"><ListaComentariosNovos /></TabsContent>
        <TabsContent value="designadas" className="m-0"><ListaComentariosNovos /></TabsContent>
        <TabsContent value="todas" className="m-0"><ListaComentariosNovos /></TabsContent>
      </Tabs>
    </div>
  );
}
export default  ViewNovidades;
