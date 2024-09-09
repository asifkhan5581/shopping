import React from "react";
import module from "./button.module.css";

function Button(props) {
  return (
    <>
      <button className={module.button}>
        {props.buttonText}
        <span></span>
      </button>
    </>
  );
}

export default Button;
