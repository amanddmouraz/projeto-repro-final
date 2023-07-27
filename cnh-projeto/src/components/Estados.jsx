import { useState } from "react";
import Axios from 'axios';
import Modal from "react-modal"; // Importa a biblioteca react-modal

import json from "../script.js"

const Estados = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [estadoData, setEstadoData] = useState({});

  // Função para buscar informações do estado pelo ID
  const getEstadoById = (id) => {
    const estad = asyn () =>
    try {
      const response = await Axios.get({json});
      setModalIsOpen(response.data);
    } catch (err) {
      console.error("Erro capturado:" + err);
    }
  }
   Estados();

  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {/* Botão para abrir o modal */}
      <button onClick={() => getEstadoById(1)}>Ver Informações do Estado 1</button>
      <button onClick={() => getEstadoById(2)}>Ver Informações do Estado 2</button>
      
      {/* Adicione mais botões conforme necessário para cada estado */}

      {/* Modal para mostrar as informações do estado */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>{estadoData.estado}</h2>
        <p>Detran: <a href={estadoData.detran} target="_blank" rel="noopener noreferrer">Clique aqui</a></p>
        <p>Obrigatório: {estadoData.obrigatorio && estadoData.obrigatorio.join(", ")}</p>
        <p>Modalidades: {estadoData.modalidades && estadoData.modalidades.join(", ")}</p>
        <p>Documentos: {estadoData.documentos && estadoData.documentos.join(", ")}</p>
        <p>Observações: {estadoData.observacoes}</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};

export default Estados;