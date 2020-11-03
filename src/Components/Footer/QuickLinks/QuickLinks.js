import React from "react";
import styles from "./QuickLinks.module.css";
import { NavLink } from "react-router-dom";

const QuickLinks = (props) => {
  return (
    <div className={styles.QuickLinks}>
      <h2>Quick Links</h2>
      <nav>
        <ul>
          <li className="ListItems">
            <NavLink exact activeClassName={styles.active} to="/">
              Home
            </NavLink>
          </li>
          <li className="ListItems">
            <NavLink activeClassName={styles.active} to="/rates">
              Rates
            </NavLink>
          </li>
          <li className="ListItems">
            <NavLink activeClassName={styles.active} to="/services">
              Services
            </NavLink>
          </li>
          <li className="ListItems">
            <NavLink activeClassName={styles.active} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default QuickLinks;
