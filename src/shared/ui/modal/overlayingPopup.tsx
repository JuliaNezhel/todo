import { ReactNode } from "react";
import { Portal } from "../portal/portal";
import style from "./overlaying.module.scss";
import FocusLock from "react-focus-lock";

export type OverlayingPopupProps = {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
};

export const OverlayingPopup = ({
  onClose,
  isOpen,
  children,
}: OverlayingPopupProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Portal>
      <div className={style.container} role="dialog">
        <div
          role="button"
          tabIndex={0}
          className={style.overlay}
          onClick={onClose}
        />
        <FocusLock>{children}</FocusLock>
      </div>
    </Portal>
  );
};
