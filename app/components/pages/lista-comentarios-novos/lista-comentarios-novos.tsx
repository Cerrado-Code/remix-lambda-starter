import { Card, CardHeader } from "~/components/ui/card";
import CardComentarioSidebar from "../conteudo-posts/card-comentario-side/card-comentario-sidebar";

interface ListaComentariosNovosProps {
  className?: string;
}

const ListaComentariosNovos: React.FC<ListaComentariosNovosProps> = ({
  className,
}) => {
  return (
    <div className="w-full bg-white p-1" style={{ minHeight: "90vh" }}>
      <CardComentarioSidebar />
    </div>
  );
};
export default ListaComentariosNovos;
