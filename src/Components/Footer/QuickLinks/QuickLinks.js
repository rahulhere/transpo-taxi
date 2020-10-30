import React from "react";
import styles from "./QuickLinks.module.css";

const QuickLinks = (props) => {
  return (
    <div className={styles.QuickLinks}>
      <h2>Quick Links</h2>
      <nav>
        <ul>
          <li className="ListItems">
            <a href="/">Home</a>
          </li>
          <li className="ListItems">
            <a href="/">Rates</a>
          </li>
          <li className="ListItems">
            <a href="/">Services</a>
          </li>
          <li className="ListItems">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default QuickLinks;
