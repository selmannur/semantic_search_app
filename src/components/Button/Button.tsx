import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import s from "./Button.module.scss";
import { getClasses } from "@/utils/getClasses";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  classes?: string;
};
const Button: FC<Props> = ({ children, classes = "", ...buttonProps }) => {
  return (
    <button className={getClasses(s.button, classes)} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
