import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import SubHeader from "./SubHeader/SubHeader";
import Aux from "./../../Hoc/Auxilliary/Auxillary";

const Header = (props) => {
  return (
    <Aux>
      <ContactInfo />
      <SubHeader showSideDrawer={props.showSideDrawer} />
    </Aux>
  );
};

export default Header;
