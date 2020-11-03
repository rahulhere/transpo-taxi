import React from "react";
import styles from "./ContactUs.module.css";
import ButtonLink from "../../UI/ButtonLink/ButtonLink";
import phone from "./../../../assets/icons/phone.png";

const ContactUs = (props) => {
  return (
    <div className={styles.ContactUs}>
      <h2>Contact Us</h2>
      <ButtonLink
        style={{
          display: "block",
          width: "100%",
          "--height": "65px",
          marginBottom: "1rem",
          fontSize: "1.3rem",
        }}
      >
        Book Online Now
      </ButtonLink>
      <div className={styles.callUs}>
        <img src={phone} alt="phone" />
        <span>
          Call Us at:
          <span className={styles.numbers}> (987) 654-3210</span> today!
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
