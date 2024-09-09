import React from "react";
import module from "./timer.module.css";
import { Container, Row, Col } from "reactstrap";
import ProductImage from "../../images/hero2.png";
import Clock from "../../UI/Clock";
import Button from "../../UI/Button";

function CountTimer() {
  return (
    <>
      <div className={module.timer}>
        <Container>
          <Row className=" align-items-center justify-align-content-center text-center">
            <Col sm="12" md="6" lg="6">
              <Clock></Clock>
            </Col>

            <Col sm="12" md="6" lg="6" className="text-end">
              <img src={ProductImage} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CountTimer;
