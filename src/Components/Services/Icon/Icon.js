import React from "react";
import styles from "./Icon.module.css";

const Icons = (props) => {
  return (
    <div className={styles.Icons}>
      <img src={props.image} alt="Icon" />
      <h3>{props.heading}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Icons;
