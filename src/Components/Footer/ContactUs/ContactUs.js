import React from "react";
import styles from "./ContactUs.module.css";
import Button from "./../../UI/Button/Button";
import phone from "./../../../assets/images/phone.png";

const ContactUs = (props) => {
  return (
    <div className={styles.ContactUs}>
      <h2>Contact Us</h2>
      <Button
        style={{
          width: "100%",
          minHeight: "60px",
          height: "34%",
          marginBottom: "1rem",
          fontSize: "1.3rem",
        }}
      >
        Book Online Now
      </Button>
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