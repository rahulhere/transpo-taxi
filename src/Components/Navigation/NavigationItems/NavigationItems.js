import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <nav className={styles.NavigationItems}>
      <ul>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/services">Services</NavigationItem>
        <NavigationItem link="/rates">Rates</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
