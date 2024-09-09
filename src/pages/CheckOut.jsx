import module from "./checkout.module.css";
import Comman from "../componant/comman/Comman";
import { Container, Row, Col } from "reactstrap";

import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../store/CardSlice";
import { Link } from "react-router-dom";
import { incrementQuantity } from "../store/CardSlice";
import { decrementQuantity } from "../store/CardSlice";

function CheckOut() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.card.product);
  const handleProductDelete = (id) => {
    dispatch(removeProduct(id));
  };
  const totalAmount = Products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const handleIncreament = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecreament = (id) => {
    dispatch(decrementQuantity(id));
  };
  return (
    <>
      <Comman title="shopping card"></Comman>

      <div className={module.checkout}>
        <Container>
          <Row>
            <Col lg="9">
              {Products.length == 0 ? (
                <h1 className="fs-2 align-items-center justify-content-center d-flex m-5">
                  there is no item
                </h1>
              ) : (
                <table className="table mt-6">
                  <thead>
                    <tr>
                      <th scope="col">images</th>
                      <th scope="col">total Product</th>
                      <th scope="col">Quntity</th>
                      <th scope="col">Price</th>
                      <th>Inc/Dec</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  {Products.map((item, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>
                            <img src={item.image} alt="" />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>$ {item.price}</td>
                          <td>
                            <button
                              className="btn btn-success m-1"
                              onClick={() => handleIncreament(item.id)}
                            >
                              +
                            </button>
                            <button
                              className="btn btn-danger m-1"
                              onClick={() => handleDecreament(item.id)}
                            >
                              -
                            </button>
                          </td>
                          <td onClick={() => handleProductDelete(item.id)}>
                            <MdDelete className={module.deleteIcon} />
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              )}
            </Col>
            <Col lg="3" className="mt-6">
              <h1 className="d-flex fs-4 align-items-center justify-content-between mt-4">
                subtotal
                <span className={module.totalPrice}>
                  $ {totalAmount.toFixed(2)}
                </span>
              </h1>
              <Link to="/shopping" className={module.buttonLink}>
                <button className={module.checkBtn}>Go to shop</button>
              </Link>
              <Link to="/checkForm">
                <button className={module.checkBtn}>CheckOut </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CheckOut;
