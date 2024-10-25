import { ReactNode } from "react";
import { Button } from "../button";

import style from "./modal.module.scss";
import FocusLock from "react-focus-lock";

export type ModalType = {
  children: ReactNode;
  closeModal: () => void;
  actionName?: string;
  onActionClick?: () => void;
  title: string;
  className?: string;
};

export const Modal = ({
  children,
  closeModal: oncCloseModal,
  actionName: actionTitle = "Действие",
  onActionClick,
  title,
  className,
}: ModalType) => {
  return (
    <div className={style.overlay} onClick={oncCloseModal}>
      <FocusLock>
        <div
          className={`${style.modal} ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className={style.modal__title}>{title}</h3>
          <button onClick={oncCloseModal} className={style.modal__close}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.96 12.0007L23.3847 4.57603C24.205 3.75568 24.205 2.42568 23.3847 1.60661L22.3949 0.616803C21.5743 -0.203807 20.2443 -0.203807 19.4252 0.616803L12.0007 8.04126L4.57603 0.615265C3.75568 -0.205088 2.42568 -0.205088 1.60661 0.615265L0.615265 1.60507C-0.205088 2.42568 -0.205088 3.75568 0.615265 4.57475L8.04126 12.0007L0.616803 19.4252C-0.203807 20.2458 -0.203807 21.5758 0.616803 22.3949L1.60661 23.3847C2.42696 24.205 3.75696 24.205 4.57603 23.3847L12.0007 15.96L19.4252 23.3847C20.2458 24.205 21.5758 24.205 22.3949 23.3847L23.3847 22.3949C24.205 21.5743 24.205 20.2443 23.3847 19.4252L15.96 12.0007Z"
                fill="#3F72AF"
              />
            </svg>
          </button>
          <div className={style.modal__main}>{children}</div>
          <div className={style.modal__buttons}>
            <Button onClick={onActionClick}>{actionTitle}</Button>
            <Button variant="secondary" onClick={oncCloseModal}>
              Закрыть
            </Button>
          </div>
        </div>
      </FocusLock>
    </div>
  );
};
