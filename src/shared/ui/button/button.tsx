import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";

import s from "./button.module.scss";

type ButtonProps = {
  className?: string;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<
  ElementRef<"button">,
  ButtonProps
>(
  (
    {
      children,
      className,
      fullWidth = false,
      variant = "primary",
      ...rest
    },
    ref,
  ) => {
  
    return (
      <button className={`${s.button} ${s[variant]} ${fullWidth && s.fullWidth} ${className? className: ''}`} ref={ref} {...rest}>
        {children}
      </button>
    );
  },
);
