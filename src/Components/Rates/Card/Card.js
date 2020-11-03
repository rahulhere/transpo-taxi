import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={[props.class, styles.Card].join(" ")}>
      <div className={styles.black}></div>
      <div className={styles.cardItems}>
        <h3>{props.heading}</h3>
        <div className={styles.childrenDiv}>{props.children}</div>
        <Link to="/contact">{props.linkText}</Link>
      </div>
    </div>
  );
};

export default Card;
