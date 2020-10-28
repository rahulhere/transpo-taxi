import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import SubHeader from "./SubHeader/SubHeader";

const Header = (props) => {
  return (
    <header>
      <ContactInfo />
      <SubHeader showSideDrawer={props.showSideDrawer} />
    </header>
  );
};

export default Header;
