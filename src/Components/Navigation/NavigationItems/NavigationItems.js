import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const NavigationItems = (props) => {
  return (
    <nav className={styles.NavigationItems}>
      <ul>
        <NavigationItem closeDrawer={props.closeDrawer} link="/">
          Home
        </NavigationItem>
        <NavigationItem closeDrawer={props.closeDrawer} link="/about">
          About
        </NavigationItem>
        <NavigationItem closeDrawer={props.closeDrawer} link="/services">
          Services
        </NavigationItem>
        <NavigationItem closeDrawer={props.closeDrawer} link="/rates">
          Rates
        </NavigationItem>
        <NavigationItem closeDrawer={props.closeDrawer} link="/contact">
          Contact
        </NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
