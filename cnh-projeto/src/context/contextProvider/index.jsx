import { Context } from '../createContext'
import { useState } from 'react'

export const ContextProvider = ({ children }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false) // Colocar a declaração do estado dentro do componente

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  

  const context = {
    modalIsOpen,
    setModalIsOpen,
    openModal,
    closeModal
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
