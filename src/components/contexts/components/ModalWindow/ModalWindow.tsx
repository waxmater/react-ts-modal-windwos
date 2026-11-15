import type { FC, ReactNode } from "react";

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
    <div>
      {/**Базовое содержимое, что должно быть всегда */}
      <div>
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