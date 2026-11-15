import { createContext, useContext, type ReactNode, type FC, useState } from "react";

import ReactDOM from "react-dom";
import { ModalOverlay } from "./components/ModalOverlay/ModalOvarlay";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";


interface IModalContexValues {
  openModal: (modal: ReactNode) => void;
  clearModalsList: () => void;
  closeCurrentModal: () => void;
}

const modalContext = createContext<IModalContexValues | null>(null);

const useModalContext = () => {
  const context = useContext(modalContext);

  if (context)
    console.log("Modal context exists");
  else
    console.error("ModalContext must use in ModalContextProvider");

  return context;
}

interface IModalContextProviderProps {
  children: ReactNode
}

const portalElement = document.getElementById("root")

const ModalContextProvider: FC<IModalContextProviderProps> = ({children}) => {
  const [modalsList, setModalsList] = useState<ReactNode[]>([]);
  
  const openModal = (modal: ReactNode) => {
    setModalsList(prev => [...prev, modal])
  }

  const clearModalsList = () => {
    setModalsList([]);
  }

  const closeCurrentModal = () => {
    const list = modalsList;
    list.pop();
    setModalsList(list);
  }

  return (
    <modalContext.Provider
      value={{
        openModal,
        clearModalsList,
        closeCurrentModal
      }}
    >
      {children}

      {portalElement && modalsList.length > 0 && ReactDOM.createPortal((
        <ModalOverlay onClick={clearModalsList}>
          <ModalWindow onCrossClick={closeCurrentModal}>
            {modalsList[modalsList.length-1]}
          </ModalWindow>
        </ModalOverlay>),
        portalElement
      )}
    </modalContext.Provider>
  )
}

export {
  ModalContextProvider, 
  useModalContext,
};