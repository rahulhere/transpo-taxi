import React from "react";
import styles from "./PageHeading.module.css";

const PageHeading = (props) => {
  return (
    <div className={styles.Heading}>
      <img src={props.image} alt="" />
      <div>
        <h1>{props.text}</h1>
      </div>
    </div>
  );
};

export default PageHeading;
