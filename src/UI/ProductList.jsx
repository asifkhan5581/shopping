import React from "react";
import ProductCard from "./ProductCard";
import ProductData from "../componant/Product/ProductData";
import CountTimer from "../componant/countTimer/CountTimer";

function ProductList({ data }) {
  const watches = data.filter((product) => {
    return product.category === "watch";
  });
  const mobile = data.filter((product) => {
    return product.category === "mobile";
  });
  const chair = data.filter((product) => {
    return product.category === "chair";
  });
  return (
    <>
      <ProductCard
        listHeading="Tranding Product"
        Products={watches}
      ></ProductCard>
      <ProductCard listHeading="Best Sale " Products={mobile}></ProductCard>
      <CountTimer></CountTimer>
      <ProductCard listHeading="New Arrival " Products={chair}></ProductCard>
    </>
  );
}

export default ProductList;
