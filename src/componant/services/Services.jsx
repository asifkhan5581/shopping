import React from "react";
import module from "./services.module.css";
import service1 from "../../images/service1.png";
import services2 from "../../images/services2.png";
import service3 from "../../images/service3.png";
import service4 from "../../images/service4.png";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <div className={module.services}>
        <Container>
          <Row>
            {serviceData.map((item) => {
              return (
                <Col sm="4" md="4" lg="3">
                  <motion.div
                    className={module.service}
                    style={{ backgroundColor: item.color }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Services;
const serviceData = [
  {
    id: 1,
    title: "Service 1",
    description: "This is service 1",
    image: service1,
    color: "#FF6F61",
  },
  {
    id: 2,
    title: "Service 2",
    description: "This is service 1",
    image: services2,
    color: "#6B5B95",
  },
  {
    id: 3,
    title: "Service 3",
    description: "This is service 1",
    image: service3,
    color: "#88B04B",
  },
  {
    id: 4,
    title: "Service 4",
    description: "This is service 4",
    image: service4,
    color: "#F7CAC9",
  },
];
