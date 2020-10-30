import React from "react";
import BrandDescription from "./BrandDescription/BrandDescription";
import ContactUs from "./ContactUs/ContactUs";
import QuickLinks from "./QuickLinks/QuickLinks";
import SubFooter from "./SubFooter/SubFooter";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.mainFooter}>
        <BrandDescription />
        <QuickLinks />
        <ContactUs />
      </div>
      <SubFooter />
    </div>
  );
};

export default Footer;
