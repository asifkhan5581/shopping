import React from "react";
import ReactDOM from "react-dom";
import module from "./card.module.css";
import { useDispatch } from "react-redux";
import { removeVisible } from "../../store/cardVisible";
import { useSelector } from "react-redux";
import { CiBookmarkRemove } from "react-icons/ci";

function Card() {
  const card = useSelector((state) => state.card.product);

  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeVisible());
  };
  const handleCheckout = () => {
    dispatch(removeVisible());
  };
  return ReactDOM.createPortal(
    <div className={module.card}>
      <div className={module.removeCard}>
        <span onClick={handleRemove}>
          <CiBookmarkRemove />
        </span>
      </div>
      {card.map((items) => {
        return (
          <div className={module.card_contant}>
            <div className={module.card_header}>
              <h2>{items.name}</h2>
              <img src={items.image} alt="" />
            </div>
            <div className={module.card_body}>
              <p>price: {items.price.toFixed(2)}</p>
            </div>
            <hr />
          </div>
        );
      })}
      <div className={module.button}>
        <button onClick={handleCheckout}>Go to Card</button>
      </div>
    </div>,
    document.getElementById("cart-portal")
  );
}

export default Card;
