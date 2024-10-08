export interface Comentario {
  name?: string;
  publication_date?: string;
  content?: string;
  visibility?: boolean;
  social_network?: string;
  feeling?: string;
  answer?: string;
  id?: string;
}

export interface ModalComentarioProps {
  dados: Comentario;
  conteudoBotao?: React.ReactNode;
  className?: string;
}
