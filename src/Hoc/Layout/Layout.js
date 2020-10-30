import React, { useState } from "react";
import Aux from "./../Auxilliary/Auxillary";
import Header from "./../../Components/Header/Header";
import Backdrop from "../../Components/UI/Backdrop/Backdrop";
import SideDrawer from "../../Components/UI/SideDrawer/SideDrawer";
import { useMediaQuery } from "react-responsive";
import Footer from "./../../Components/Footer/Footer";

const Layout = (props) => {
  const [showSideDrawer, _setShowSideDrawer] = useState(false);

  let setShowSideDrawer = (bool) => {
    _setShowSideDrawer(bool);
  };

  let backdrop = showSideDrawer ? (
    <Backdrop clicked={setShowSideDrawer.bind(this, false)} />
  ) : null;

  if (!useMediaQuery({ query: "(max-width: 1025px)" }) && showSideDrawer) {
    setShowSideDrawer(false);
  }

  return (
    <Aux>
      <Header showSideDrawer={setShowSideDrawer} />
      {backdrop}
      <SideDrawer
        show={showSideDrawer}
        styles={{
          transform: showSideDrawer ? "translateX(0)" : "translateX(100%)",
        }}
      />
      {props.children}
      <Footer />
    </Aux>
  );
};

export default Layout;
