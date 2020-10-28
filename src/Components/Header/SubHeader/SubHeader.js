import React from "react";
import styles from "./SubHeader.module.css";
import brandLogo from "./../../../assets/images/logo-image.png";
import menuImage from "./../../../assets/images/menu.png";
import Button from "./../../UI/Button/Button";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import { useMediaQuery } from "react-responsive";

const SubHeader = (props) => {
  return (
    <div className={styles.SubHeader}>
      <img className={styles.logo} src={brandLogo} alt="Brand Logo" />
      {useMediaQuery({ query: "(max-width: 1025px)" }) ? null : (
        <NavigationItems />
      )}
      <Button
        classes={styles.button}
        style={{ margin: "0 1rem", marginRight: 0 }}
      >
        Book Now
      </Button>
      <img
        className={styles.menu}
        src={menuImage}
        alt="Open Menu"
        onClick={props.showSideDrawer.bind(this, true)}
      />
    </div>
  );
};

export default SubHeader;
