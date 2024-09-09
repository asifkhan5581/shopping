import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../../Router/Routers";
import Card from "../card/Card";
import { useSelector } from "react-redux";

function Layout() {
  const isVisible = useSelector((state) => state.visible);

  return (
    <>
      <Header />
      {isVisible ? <Card /> : ""}

      <Routers />

      <Footer />
    </>
  );
}

export default Layout;
