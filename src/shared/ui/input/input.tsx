import React, { InputHTMLAttributes, useId } from "react";
import style from "./input.module.scss";

export type InputProps = {
  errorMessage?: string;
  label?: string;
  id?: string | number;
  labelRequired?: boolean
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, label, id, className,labelRequired, ...rest }, ref) => {
    const ID = useId();

    const inputID = id || ID;

    return (
      <div className={style.wrapper}>
        {label && <label htmlFor={inputID} className={style.label}>{label}
            {labelRequired && <span className={`${labelRequired? style.labelRequired : ''}`}> *</span>}
            </label>}
        <input className={`${style.input} ${errorMessage? style.error: ''} ${className? className: ''}`} ref={ref} {...rest} id={inputID} />
        {errorMessage && (
          <div className={style.errorMessage}>{errorMessage}</div>
        )}
      </div>
    );
  },
);
