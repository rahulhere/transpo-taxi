import React from "react";
import styles from "./ButtonLink.module.css";
import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  return (
    <Link
      className={[styles.Button, props.classes].join(" ")}
      to="/contact"
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default ButtonLink;
