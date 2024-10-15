import { AlignJustifyIcon, HeartCrackIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import React from "react";
import ComentarioFacebook from "./comentario-facebook/comentario-facebook";

const PostFacebookModelo = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-centern">
      <div className="bg-white rounded-lg shadow-md max-w-lg w-full p-4">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className="rounded-full"
          ></img>
          <div className="ml-2">
            <h3 className="font-bold">Nome do Usuário</h3>
            <p className="text-gray-600 text-sm">Há 5 minutos</p>
          </div>
        </div>

        <p className="mb-4">
          Esse é um exemplo de post do Facebook usando Tailwind CSS!
        </p>

        <img
          src="https://via.placeholder.com/600x300"
          alt="Imagem do Post"
          className="rounded-lg mb-4"
        ></img>

        <div className="flex justify-evenly text-gray-600">
          <button className="flex gap-2 items-center">
            <HeartIcon />
            <span>Curtir</span>
          </button>
          <button className="flex gap-2 items-center">
            <AlignJustifyIcon />
            <span>Comentar</span>
          </button>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold mb-2">Comentários</h4>

          <ComentarioFacebook />
        </div>
      </div>
    </div>
  );
};

export default PostFacebookModelo;
