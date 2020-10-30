import React from "react";
import styles from "./BrandDescription.module.css";
import brandLogo from "./../../../assets/images/logo-image.png";

const BrandDescription = (props) => {
  return (
    <div className={styles.BrandDescription}>
      <img src={brandLogo} alt="Brand Logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit facere
        dolorum laboriosam debitis mollitia cumque architecto sed pariatur,
        aspernatur reprehenderit odio voluptatum blanditiis tempore accusamus
        magnam culpa doloribus dolorem voluptates!
      </p>
    </div>
  );
};

export default BrandDescription;
