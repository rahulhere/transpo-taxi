import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={[props.class, styles.Card].join(" ")}>
      <img src={props.image} alt="" />
      <h4>{props.header}</h4>
      <p>{props.description}</p>
      <Link to={props.linkTo} className={styles.link}>
        {props.linkText}
      </Link>
    </div>
  );
};

export default Card;
