import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductData from "../componant/Product/ProductData";
import module from "./detail.module.css";
import { Container, Row, Col } from "reactstrap";
import Comman from "../componant/comman/Comman";
import Button from "../UI/Button";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addReviews } from "../store/reviewsSlice";
import { addProduct } from "../store/CardSlice";
import ProductList from "../UI/ProductList";
import { motion } from "framer-motion";

function ProductDetail() {
  const dispatch = useDispatch();
  const revewData = useSelector((state) => state.reviewData.reviews);
  const [tap, setTap] = useState("description");
  const [reviewName, setreviewName] = useState();
  const [message, setMessage] = useState();

  const { id } = useParams();
  const product = ProductData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>There is no item</p>;
  }

  const { name, price, category, image, description } = product;

  const handleDescription = () => {
    setTap("description");
  };
  const handleReviews = () => {
    setTap("reviews");
  };

  const handleAddToCard = () => {
    dispatch(
      addProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addReviews({
        name: reviewName,
        message: message,
      })
    );
    setreviewName("");
    setMessage("");
  };

  return (
    <>
      <div className={module.Main_details}>
        <Comman title="Welcome to Product Details" />

        <Container>
          <Row>
            <Col md="6" lg="6">
              <div className={module.detailImage}>
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={image}
                  alt={name}
                />
              </div>
            </Col>
            <Col md="6" lg="6">
              <div className={module.DetailContant}>
                <h1>{name}</h1>
                <div className={module.DetailsIcon}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      <IoStarSharp />
                    </span>
                  ))}
                </div>
                <p>
                  {description} Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Aspernatur sunt ab magni inventore facilis
                  consectetur culpa illum.
                </p>
                <h3>
                  <span>Price:</span> ${price}
                </h3>
                <h2>Category: {category}</h2>
              </div>

              <motion.button
                whileTap={{ scale: 1.2 }}
                onClick={handleAddToCard}
                className="btn btn-primary"
              >
                Add to card
              </motion.button>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md="12" lg="12" className="m-5">
              <div className={module.Reviews}>
                <span
                  className={`${module.detailhead} ${
                    tap === "description" ? module.active : ""
                  } m-5`}
                  onClick={handleDescription}
                >
                  Description
                </span>
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className={`${module.detailhead} ${
                    tap === "reviews" ? module.active : ""
                  } m-5`}
                  onClick={handleReviews}
                >
                  Reviews({revewData.length})
                </motion.span>
              </div>
              {tap === "description" && (
                <div className={module.descriptionData}>
                  <p>
                    {description} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vitae facilis adipisci aliquam non beatae
                    fugit, iste nisi in doloribus, sapiente illum fugiat, atque
                    ducimus rerum voluptate aperiam quis odio animi! Vitae
                    facilis adipisci aliquam non beatae fugit, iste nisi in
                    doloribus, sapiente illum fugiat, atque ducimus rerum
                    voluptate aperiam quis odio animi!
                  </p>
                </div>
              )}
              {tap === "reviews" && (
                <div className={module.ReviewsDetails}>
                  {revewData.map((item, index) => (
                    <div key={index}>
                      <h2>{item.name}</h2>
                      <p className={module.rating}>
                        Rating <span> (4.7)</span>
                      </p>
                      <p>{item.message}</p>
                    </div>
                  ))}

                  <form onSubmit={handleSubmit}>
                    <h1>Leave your experience</h1>
                    <div className={module.form_group}>
                      <input
                        type="text"
                        placeholder="Enter your Name"
                        value={reviewName}
                        onChange={(e) => setreviewName(e.target.value)}
                      />
                    </div>
                    <div className={module.form_group}>
                      <input
                        type="text"
                        placeholder="Enter your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className={module.DetailIcons}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          <IoStarSharp />
                        </span>
                      ))}
                    </div>
                    <Button buttonText="Add Review" />
                  </form>
                </div>
              )}
            </Col>
          </Row>
        </Container>
        <Container>
          <h3>You might also like this Product</h3>
          <ProductList data={ProductData}></ProductList>
        </Container>
      </div>
    </>
  );
}

export default ProductDetail;
