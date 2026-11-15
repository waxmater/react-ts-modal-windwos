import type { FC, ReactNode } from "react";

interface ModalOverlayProps {
  children: ReactNode;
  onClick: () => void;
}

export const ModalOverlay: FC<ModalOverlayProps> = ({
  children,
  onClick
}) => {
  return(
    <div onClick={onClick}>
      {children}
    </div>
  )
}