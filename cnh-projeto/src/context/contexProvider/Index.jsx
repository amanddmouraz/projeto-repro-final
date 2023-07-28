import { Context } from '../createContext/Index'
import { useState } from "react";

export const ContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Colocar a declaração do estado dentro do componente

  const context = {
    modalIsOpen,
    setModalIsOpen,
  };

  return (
    <Context.Provider value={context}> 
      {children}
    </Context.Provider>
  );
};
