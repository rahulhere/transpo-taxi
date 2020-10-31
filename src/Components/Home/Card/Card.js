import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={[props.class, styles.Card].join(" ")}>
      <img src={props.image} alt="" />
      <h4>{props.header}</h4>
      <p>{props.description}</p>
      <p className={styles.link}>{props.linkText}</p>
    </div>
  );
};

export default Card;
