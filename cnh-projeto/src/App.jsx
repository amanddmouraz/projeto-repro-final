import React, { useContext, useState } from 'react';
import './global.css';
import Router from './Router';
import Modal from './components/Modal';
import { ContextProvider } from './context/contexProvider/Index'
import { Context } from './context/createContext/Index';

function App() {
  // const {setModalIsOpen} = useContext (Context)
  

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ContextProvider>
      <div className='App'>
        <Router />
      </div>
      <Modal isOpen={openModal} onClose={closeModal}>
        <h2>Título do Modal</h2>
        <p>Conteúdo do Modal aqui...</p>
      </Modal>
    </ContextProvider>
  );
}

export default App;
