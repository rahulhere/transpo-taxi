import React, { useState } from "react";
import Aux from "./../Auxilliary/Auxillary";
import Header from "./../../Components/Header/Header";
import Backdrop from "../../Components/UI/Backdrop/Backdrop";
import SideDrawer from "../../Components/UI/SideDrawer/SideDrawer";
import { gsap } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Layout = (props) => {
  const [showSideDrawer, _setShowSideDrawer] = useState(false);
  const [sideDrawerRef, _setSideDrawerRef] = useState(null);

  let setShowSideDrawer = (bool) => {
    _setShowSideDrawer(bool);
    gsap.to(sideDrawerRef, {
      x: bool ? 0 : "100%",
      duration: 0.5,
    });
  };

  let setSideDrawerRef = (element) => {
    _setSideDrawerRef(element);
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
      <SideDrawer show={showSideDrawer} setRef={setSideDrawerRef} />
      {props.children}
      And then footer will be here too
    </Aux>
  );
};

export default Layout;
