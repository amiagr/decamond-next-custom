import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = "text", error }) => (
  <div className={styles.wrapper}>
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
    {error && <div className={styles.error}>{error}</div>}
  </div>
);

export default Input;
