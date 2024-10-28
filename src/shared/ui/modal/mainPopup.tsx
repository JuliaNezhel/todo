import style from "./miniPopup.module.scss";
import { CrossLightIcon } from "@/shared/assets/icon";
import { OverlayingPopup, OverlayingPopupProps } from "./overlayingPopup";

type Props = { className?: string; title: string } & OverlayingPopupProps;

export const MainPopup = ({
  isOpen,
  onClose,
  children,
  className,
  title,
}: Props) => {
  return (
    <OverlayingPopup isOpen={isOpen} onClose={onClose}>
      <div className={`${style.container} ${className ? className : ""}`}>
        <h3 className={style.title}>{title}</h3>
        <button onClick={onClose} className={style.close}>
          <CrossLightIcon />
        </button>
        {children}
      </div>
    </OverlayingPopup>
  );
};
