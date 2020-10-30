import { React } from "react";
import styles from "./SideDrawer.module.css";
import NavigationItems from "./../../Navigation/NavigationItems/NavigationItems";

const SideDrawer = (props) => {
  return (
    <div className={styles.SideDrawer} style={props.styles}>
      <NavigationItems />
    </div>
  );
};

export default SideDrawer;
