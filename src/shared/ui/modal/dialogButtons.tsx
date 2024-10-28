import { Button } from "../button";
import style from "./dialogButtons.module.scss";

type Props = {
  primaryButtonText: string;
  primaryButtonClick: () => void;
  secondaryButtonText: string;
  secondaryButtonClick: () => void;
  isPrimaryDisabled?: boolean;
  isSecondaryDisabled?: boolean;
};

export const DialogButtons = ({
  primaryButtonText,
  primaryButtonClick,
  secondaryButtonClick,
  secondaryButtonText,
  isPrimaryDisabled,
  isSecondaryDisabled,
}: Props) => {
  return (
    <div className={style.modal__buttons}>
      <Button onClick={primaryButtonClick} disabled={isPrimaryDisabled}>
        {primaryButtonText}
      </Button>
      <Button
        variant="secondary"
        onClick={secondaryButtonClick}
        disabled={isSecondaryDisabled}
      >
        {secondaryButtonText}
      </Button>
    </div>
  );
};
