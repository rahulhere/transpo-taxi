import React from "react";
import styles from "./Textarea.module.css";
import PropTypes from "prop-types";

const Textarea = (props) => {
  return (
    <div
      className={[
        styles.TextareaDiv,
        props.invalid === true && props.value.trim() !== ""
          ? styles.invalid
          : null,
      ].join(" ")}
    >
      <textarea
        id={props.id}
        value={props.value}
        onChange={props.setValue}
        maxLength="200"
        rows="2"
        required
      ></textarea>
      <label htmlFor={props.id}>{props.labelText}</label>
      <div className={styles.slider}></div>
    </div>
  );
};

Textarea.propTypes = {
  id: PropTypes.string,
  value: PropTypes.any.isRequired,
  labelText: PropTypes.string,
};

export default Textarea;
