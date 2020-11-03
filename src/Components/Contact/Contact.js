import React from "react";
import styles from "./Contact.module.css";
import Form from "./Form/Form";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.heading}>
        <iframe
          title="Google Map"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/view?zoom=17&center=22.7292%2C75.8069&key=AIzaSyBdJVWMXV0ogdq76V4Gh4WdHOrkJDS7uTE"
          allowFullScreen
        ></iframe>
        <h1>Contact Us</h1>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
