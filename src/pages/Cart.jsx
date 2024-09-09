import React from "react";
import Comman from "../componant/comman/Comman";
import { Container, Row, Col } from "reactstrap";
import module from "./card.module.css";
import { useSelector } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.card.product);

  const subTotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const deliveryFee = subTotal > 0 ? 0 : 10; // Example logic
  const total = subTotal + deliveryFee;

  return (
    <>
      <Comman title="Check Out Pages" />
      <Container>
        <Row>
          <Col lg="8">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Enter Your Name" />
                <br />
                <input type="email" placeholder="Enter Your Email" />
                <br />
                <input type="number" placeholder="Enter Your Phone" />
                <br />
                <input type="text" placeholder="Enter Your Address" />
                <br />
                <input type="number" placeholder="Enter Your Number" />
                <br />
              </div>
            </form>
          </Col>
          <Col lg="4">
            <div className={module.card}>
              <h2>Order Summary</h2>
              {products.length > 0 ? (
                <>
                  {products.map((product) => (
                    <div key={product.id}>
                      <p>
                        {product.name} x {product.quantity}
                      </p>
                      <p>Price: ${product.price * product.quantity}</p>
                    </div>
                  ))}
                  <p>
                    Sub Total: <span>${subTotal.toFixed(2)}</span>{" "}
                  </p>
                  <p>
                    Delivery fee: <span>${deliveryFee.toFixed(2)}</span>
                  </p>
                  <p>
                    Total:<span>${total.toFixed(2)}</span>
                  </p>
                </>
              ) : (
                <p>Your cart is empty.</p>
              )}
              <button
                className={module.OrderBtn}
                disabled={products.length === 0}
              >
                Order Now
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
