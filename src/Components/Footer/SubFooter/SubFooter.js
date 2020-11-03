import React from "react";
import styles from "./SubFooter.module.css";
import facebook from "./../../../assets/icons/facebook.png";
import twitter from "./../../../assets/icons/twitter.png";
import instagram from "./../../../assets/icons/insta.png";

const SubFooter = () => {
  return (
    <div className={styles.SubFooter}>
      <span className={styles.Copyright}>
        Copyright 2020 @ <span className={styles.Name}>Rahul Soni</span>
      </span>
      <a href="https://dont_use_fb" target="_blank" rel="noreferrer">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://dont_use_twitter_too" target="_blank" rel="noreferrer">
        <img src={twitter} alt="twitter" />
      </a>
      <a
        href="https://www.instagram.com/rahulhere___/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
    </div>
  );
};

export default SubFooter;
