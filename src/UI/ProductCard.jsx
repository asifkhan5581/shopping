import React from "react";
import { Container, Row, Col } from "reactstrap";
import module from "./products.module.css";
import { motion } from "framer-motion";
import { MdOutlineAddCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/CardSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ProductCard({ Products, listHeading }) {
  const dispatch = useDispatch();

  const handleAddToCard = (product) => {
    dispatch(
      addProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
    toast.success("product add successfully");
  };

  return (
    <div className={module.ProductList}>
      <div className="ProductHeading">
        <h2>{listHeading}</h2>
      </div>
      <Container>
        <Row>
          {Products.map((product) => (
            <Col lg="3" md="4" key={product.id}>
              <motion.div
                className={module.productCard}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={`/shopping/${product.id}`}
                  className={module.linkDetails}
                >
                  <img src={product.image} alt={product.name} />
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                    <div>
                      <p className={module.itemPrice}>
                        Price: ${product.price}
                      </p>
                      <span
                        className={module.addIcon}
                        onClick={() => handleAddToCard(product)}
                      >
                        <MdOutlineAddCircle />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductCard;
