import type { FC, ReactNode } from "react";

import style from "./ModalOverlay.module.scss"

interface ModalOverlayProps {
  children: ReactNode;
  onClick: () => void;
}

export const ModalOverlay: FC<ModalOverlayProps> = ({
  children,
  onClick
}) => {
  return(
    <div className={style["overlay"]} onClick={onClick}>
      {children}
    </div>
  )
}