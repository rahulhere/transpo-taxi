import React from "react";
import styles from "./PageEnding.module.css";
import ctaImage from "./../../../assets/images/taxi-image.jpg";
import { Link } from "react-router-dom";

const PageEnding = (props) => {
  return (
    <div className={styles.cta}>
      <img src={ctaImage} alt="" />
      <div className={styles.ctaText}>
        <p>SIMPLE, QUICK & EASY PROCESS</p>
        <h2>Book Online</h2>
        <h2>Ahead of Time</h2>
        <Link to="/contact">Get Started</Link>
      </div>
    </div>
  );
};

export default PageEnding;
