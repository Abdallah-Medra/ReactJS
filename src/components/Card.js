import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/Actions/cartAction";

function Card(props) {
  const dispatch = useDispatch();
  function add(product) {
    dispatch(addToCart(product));
  }
  function remove(productTitle) {
    dispatch(removeFromCart(productTitle));
  }
  return (
    <div className="card my-3" style={{ width: "20 rem", height: "420px" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="d-grid gap-3">
          {props.isInCart === "false" ? (
            <button
              type="button"
              onClick={() => add(props)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          ) : (
            <button
              type="button"
              onClick={() => remove(props.title)}
              className="btn btn-danger"
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;
