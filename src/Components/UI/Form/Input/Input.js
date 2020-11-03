import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div
      className={[
        styles.InputDiv,
        props.invalid === true && props.value.trim() !== ""
          ? styles.invalid
          : null,
      ].join(" ")}
    >
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.setValue}
        required
      />
      <label htmlFor={props.id}>{props.labelText}</label>
      <div className={styles.slider}></div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password"]),
  id: PropTypes.string,
  value: PropTypes.any.isRequired,
  labelText: PropTypes.string,
};

export default Input;
