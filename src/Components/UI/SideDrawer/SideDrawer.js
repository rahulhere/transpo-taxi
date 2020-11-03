import { React } from "react";
import styles from "./SideDrawer.module.css";
import NavigationItems from "./../../Navigation/NavigationItems/NavigationItems";
import closeButton from "./../../../assets/icons/close.png";

const SideDrawer = (props) => {
  return (
    <div className={styles.SideDrawer} style={props.styles}>
      <NavigationItems closeDrawer={props.closeDrawer.bind(this, false)} />
      <img
        src={closeButton}
        alt=""
        onClick={props.closeDrawer.bind(this, false)}
      />
    </div>
  );
};

export default SideDrawer;
