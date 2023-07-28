
import React, { useContext, useState } from 'react';
import './global.css';
import Router from './Router';
import { ContextProvider } from './context/contextProvider/Index';
import Modal from './components/Modal';

function App() {
  // const {setModalIsOpen} = useContext(Context)


  return (
    <ContextProvider>
      <div className='App'>
        <Router />
      </div>
    </ContextProvider>
  );
}

export default App;


// isOpen={openModal} onClose={closeModal}