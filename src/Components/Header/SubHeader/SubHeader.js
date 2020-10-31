import React, { useEffect, useState } from "react";
import styles from "./SubHeader.module.css";
import brandLogo from "./../../../assets/images/logo-image.png";
import menuImage from "./../../../assets/images/menu.png";
import ButtonLink from "../../UI/ButtonLink/ButtonLink";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import { useMediaQuery } from "react-responsive";
import makeHeaderSticky from "./../../../Utility/makeHeaderSticky";

const SubHeader = (props) => {
  const [inStyles, setInStyles] = useState({});

  const _makeHeaderSticky = () => {
    // made coz addEventListener and removeEventListener must be passed the same function reference to function properly...
    makeHeaderSticky(setInStyles);
  };

  useEffect(() => {
    window.addEventListener("scroll", _makeHeaderSticky, false);
    return () => {
      window.removeEventListener("scroll", _makeHeaderSticky);
    };
  });

  return (
    <div className={styles.SubHeader} style={inStyles}>
      <img className={styles.logo} src={brandLogo} alt="Brand Logo" />
      {useMediaQuery({ query: "(max-width: 1025px)" }) ? null : (
        <NavigationItems />
      )}
      <ButtonLink
        classes={styles.button}
        style={{ margin: "0 1rem", marginRight: 0 }}
      >
        Book Now
      </ButtonLink>
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
