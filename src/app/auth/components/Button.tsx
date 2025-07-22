import React, {ButtonHTMLAttributes} from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  // type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ className, children, disabled, type, onClick }) => (
  <button
    className={`${styles.button} ${className ?? ''}`}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
