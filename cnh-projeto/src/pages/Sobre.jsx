import React, { useState } from 'react';
import Header from '../components/Header';
import mapa from '../assets/mapa.svg';
import styles from '../styles/pages/sobre.module.css';
import Modal from '../components/Modal';
import { objetoJson } from '../script';

const Sobre = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEstado, setSelectedEstado] = useState(null);

  const showModal = (estado) => {
    setSelectedEstado(estado);
    setModalIsOpen(true);
  };

  const hiddenModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Header title="O que eu preciso para tirar a minha CNH?" />
      <div className={styles.subtitleConteiner}>
        <h2> Clique no botão com a sigla do seu estado e confira as informações necessárias: </h2>
        </div>
      <div className={styles.sobreContainer}>
        <img className={styles.mapBrasil} src={mapa} alt="Mapa do Brasil" />
        <div className={styles.buttons}>
          {objetoJson.map((estadoData) => (
            <button
              key={estadoData.id}
              className={styles.EstadoButton}
              onClick={() => showModal(estadoData)}
            >
              {estadoData.sigla}
            </button>
          ))}
        </div>
      </div>
      {selectedEstado && (
        <Modal isOpen={modalIsOpen} onClose={hiddenModal}>
          <h2>{selectedEstado.estado}</h2>
          <p>
            <strong>Detran:</strong>{' '}
            <a href={selectedEstado.detran} target="_blank" rel="noopener noreferrer">
              {selectedEstado.detran}
            </a>
          </p>
          <p>
            <strong>Obrigatório:</strong>{' '}
            {Array.isArray(selectedEstado.obrigatorio)
              ? selectedEstado.obrigatorio.join(', ')
              : selectedEstado.obrigatorio}
          </p>
          <p>
            <strong>Modalidades:</strong>{' '}
            {Array.isArray(selectedEstado.modalidades)
              ? selectedEstado.modalidades.join(', ')
              : selectedEstado.modalidades}
          </p>
          <p>
            <strong>Documentos:</strong>{' '}
            {selectedEstado.documentos.join(', ')}
          </p>
          {selectedEstado.observacoes && (
            <p>
              <strong>Observações:</strong> {selectedEstado.observacoes}
            </p>
          )}
        </Modal>
      )}
    </>
  );
};

export default Sobre;
