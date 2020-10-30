import React from "react";
import styles from "./SubFooter.module.css";
import facebook from "./../../../assets/images/facebook.png";
import twitter from "./../../../assets/images/twitter.png";
import instagram from "./../../../assets/images/insta.png";

const SubFooter = () => {
  return (
    <div className={styles.SubFooter}>
      <span className={styles.Copyright}>
        Copyright 2020 @ <span className={styles.Name}>Rahul Soni</span>
      </span>
      <img src={facebook} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
      <img src={instagram} alt="Instagram" />
    </div>
  );
};

export default SubFooter;
