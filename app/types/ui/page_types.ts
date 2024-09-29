export interface Comentario {
    nome?: string;
    data?: string ; 
    comentario?: string;
    visibilidade?: boolean;
    rede?: string,
    sentimento?: string,
    resposta?: string,
  }
  
  export interface ModalComentarioProps {
    dados: Comentario;
    conteudoBotao?: React.ReactNode;
    className?: string
  }