import React from "react";
import styles from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const NavigationItem = (props) => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1025px)" });

  return (
    <li className={styles.NavigationItem}>
      <NavLink
        activeClassName={styles.active}
        exact
        to={props.link}
        onClick={() => {
          if (isMobileOrTablet) {
            props.closeDrawer();
          }
        }}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
