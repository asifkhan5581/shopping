import React from "react";
import module from "./common.module.css";

function Comman(props) {
  return (
    <>
      <div className={module.main_comman}>
        <h1>{props.title}</h1>
      </div>
    </>
  );
}

export default Comman;
