import React from "react";
import logoImage from "../../images/online-shopping.png";
import "./header.css";

function Logo() {
  return (
    <>
      <div className="logo">
        <img src={logoImage} alt="Logo" />
        {/* <h1>Shop</h1> */}
      </div>
    </>
  );
}

export default Logo;
