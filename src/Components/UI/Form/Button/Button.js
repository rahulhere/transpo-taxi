import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      {...props}
      className={[styles.Button, props.disabled ? styles.disabled : null].join(
        " "
      )}
      disabled={props.disabled}
    >
      Button text
    </button>
  );
};

export default Button;
