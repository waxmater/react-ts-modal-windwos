import { createContext, useContext, type ReactNode, type FC, useState } from "react";

import ReactDOM from "react-dom";


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
        <>
          {modalsList[modalsList.length-1]}
        </>),
        portalElement
      )}
    </modalContext.Provider>
  )
}

export {
  ModalContextProvider, 
  useModalContext,
};