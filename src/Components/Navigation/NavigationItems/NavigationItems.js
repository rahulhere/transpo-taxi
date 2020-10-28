import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <nav className={styles.NavigationItems}>
      <ul>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/">About</NavigationItem>
        <NavigationItem link="/">Services</NavigationItem>
        <NavigationItem link="/">Rates</NavigationItem>
        <NavigationItem link="/">Contact</NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
