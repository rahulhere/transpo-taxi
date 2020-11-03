import React from "react";
import styles from "./ContactInfo.module.css";
import facebook from "./../../../assets/icons/facebook.png";
import twitter from "./../../../assets/icons/twitter.png";
import instagram from "./../../../assets/icons/insta.png";
import phone from "./../../../assets/icons/phone.png";

const ContactInfo = () => {
  return (
    <div className={styles.ContactInfo}>
      <div className={styles.mediaHandles}>
        <span>Follow Us:</span>
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
      <div className={styles.callUs}>
        <img src={phone} alt="phone" />
        <span>
          Call Us Today:
          <span className={styles.numbers}> (987) 654-3210</span>
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
