import { useState, useEffect, useRef } from "react";
import type { MouseEventHandler } from "react";

import Styles from "./select.module.scss";
import { VectorIcon } from "../../assets/icon";

type Option = {
  title: string;
  value: string;
};
type OptionProps = {
  option: Option;
  onClick: (value: Option["value"]) => void;
  isActive?: boolean;
};
const OptionEl = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
    isActive,
  } = props;
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (clickedValue: Option["value"]): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onClick(value);
      }
    };

    option.addEventListener("keydown", handleEnterKeyDown);
    return () => {
      option.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, [value, onClick]);

  return (
    <li
      className={`${Styles.option} ${isActive ? Styles.option_isActive : ""}`}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      data-testid={`select-option-${value}`}
      ref={optionRef}
    >
      {title}
    </li>
  );
};

type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: "rows" | "cells";
  status?: "default" | "invalid";
  onChange?: (selected: Option["value"]) => void;
  onClose?: () => void;
  label?: string 
};

export const Select = (props: SelectProps) => {
  const {
    mode = "rows",
    options,
    placeholder,
    status = "default",
    selected,
    onChange,
    onClose,
    label
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        if (isOpen) {
          onClose?.();
        }
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen((prev) => !prev);
      }
    };
    placeholderEl.addEventListener("keydown", handleEnterKeyDown);

    return () => {
      placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, []);

  const handleOptionClick = (value: Option["value"]) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={Styles.selectWrapper}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
      data-testid="selectWrapper"
    >
      {label && <span className={Styles.label}>{label}</span>}
      <div className={Styles.arrow}>
        <VectorIcon />
      </div>
      <div
        className={Styles.placeholder}
        data-status={status}
        data-selected={!!selected?.value}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul className={Styles.select} data-testid="selectDropdown">
          {options.map((option) => (
            <OptionEl
              key={option.value}
              option={option}
              onClick={handleOptionClick}
              isActive={selected?.title === option.title}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
