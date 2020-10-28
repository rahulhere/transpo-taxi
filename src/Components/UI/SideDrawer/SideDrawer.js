import { React } from "react";
import styles from "./SideDrawer.module.css";
import NavigationItems from "./../../Navigation/NavigationItems/NavigationItems";

const SideDrawer = (props) => {
  return (
    <div className={styles.SideDrawer} ref={props.setRef}>
      <NavigationItems />
    </div>
  );
};

export default SideDrawer;
