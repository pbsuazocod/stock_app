import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="w-screen border-b-2 h-20 border-[#C1C1C1] flex justify-center">
      <img src={logo} alt="bolsa de valores logo" />
    </div>
  );
}

export default Header;
