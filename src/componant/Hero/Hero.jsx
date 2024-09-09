import React, { useEffect, useState } from "react";
import HeroImage from "./HeroImage";
import module from "./hero.module.css";
import { Container, Row, Col } from "reactstrap";
import Button from "../../UI/Button";
import { PiArrowUDownLeftFill } from "react-icons/pi";
import { PiArrowUUpRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import ProductList from "../../UI/ProductList";
import Services from "../services/Services";
import ProductData from "../Product/ProductData";
const HeroContant = [
  {
    id: 1,
    title: "Shopify themes—built for commerce",
    description:
      "Packed with built‑in features. Offer discounts, recommend products, capture emails, and do more for your buyers. Optimized for selling online. ",
  },
  {
    id: 2,
    title: "Buy your Product themes—built for commerce",
    description:
      "Packed with built‑in features. Offer discounts, recommend products, capture emails, and do more for your buyers. Optimized for selling online. ",
  },
  {
    id: 3,
    title: "Shopify themes—built for commerce",
    description:
      "Packed with built‑in features. Offer discounts, recommend products, capture emails, and do more for your buyers.",
  },
];
const year = new Date().getFullYear();
function Hero(props) {
  document.title = "shopping-" + props.title;
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((preInd) => {
        return preInd + 1 >= HeroImage.length ? 0 : preInd + 1;
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const handleLeft = () => {
    setSlide((preInd) => {
      return preInd <= 0 ? HeroImage.length - 1 : preInd - 1;
    });
  };
  const handleRight = () => {
    setSlide((preInd) => {
      return preInd >= HeroImage.length - 1 ? 0 : preInd + 1;
    });
  };
  return (
    <>
      <div className={module.hero}>
        <Container>
          <Row className="align-items-center">
            <Col md="6" xl="8">
              <div className={module.heroText}>
                <h3>Tranding product {year}</h3>
                <h1>{HeroContant[slide].title}</h1>
                <p>{HeroContant[slide].description}</p>
                <Link to="/shopping">
                  <Button buttonText="Buy Now" />
                </Link>
              </div>
            </Col>
            <Col md="6" xl="4">
              {HeroImage.map((image, index) => (
                <img
                  src={image.image}
                  alt=""
                  key={index}
                  style={{
                    display: slide === index ? "block" : "none",
                    width: "100%",
                  }}
                />
              ))}
            </Col>
          </Row>
          <div className={module.HeroIcon}>
            <div className={module.left} onClick={handleLeft}>
              <PiArrowUDownLeftFill />
            </div>
            <div className={module.right} onClick={handleRight}>
              <PiArrowUUpRightBold />
            </div>
          </div>
        </Container>
      </div>
      <Services></Services>
      <ProductList data={ProductData}></ProductList>
    </>
  );
}

export default Hero;
