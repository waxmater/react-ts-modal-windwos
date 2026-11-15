import type { FC, ReactNode } from "react";

import style from "./ModalWindow.module.scss"

interface IModalWindowProps {
  children: ReactNode,
  onCrossClick: () => void,
  title?: string,
}

export const ModalWindow: FC<IModalWindowProps> = ({
  children,
  onCrossClick,
  title
}) => {
  return (
    <div className={style["window"]} onClick={(event) => event.stopPropagation()}>
      {/**Базовое содержимое, что должно быть всегда */}
      <div className={style["window__head"]}>
        <span>{title}</span>

        <span onClick={onCrossClick}> {/**Потом можно заменить на svg-шку */}
          X
        </span>
      </div>

      {/**Тело модального окна, оно же основное содержимое */}
      <div>
        {children}
      </div>  
    </div> 
  )
}