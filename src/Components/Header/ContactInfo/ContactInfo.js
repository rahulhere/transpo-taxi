import React from "react";
import styles from "./ContactInfo.module.css";
import facebook from "./../../../assets/images/facebook.png";
import twitter from "./../../../assets/images/twitter.png";
import instagram from "./../../../assets/images/insta.png";
import phone from "./../../../assets/images/phone.png";

const ContactInfo = () => {
  return (
    <div className={styles.ContactInfo}>
      <div className={styles.mediaHandles}>
        <span>Follow Us:</span>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
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
