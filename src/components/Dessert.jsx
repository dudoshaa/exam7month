import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrement,
  increment,
} from "../app/features/cartSlice";
import { formatNumber } from "../utils";

function Dessert({ dessert }) {
  const dispatch = useDispatch();
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  useEffect(() => {
    setAlreadyAdded(dessert.amount > 0);
  }, [dessert.amount]);

  const handleAdd = () => {
    dispatch(addToCart(dessert.id));
    setAlreadyAdded(true);
  };

  return (
    <li className="cart">
      <img
        style={{ borderColor: alreadyAdded ? "#c7380f" : "transparent" }}
        className="cart__image"
        src={dessert.image.desktop}
        width={250}
        height={240}
        alt={dessert.name}
      />

      <div className="buttons__wrapper">
        {!alreadyAdded ? (
          <button onClick={handleAdd} className="add__cart">
            <span className="add__cart__wrapper">
              <img src="../images/icon-add-to-cart.svg" alt="" />
              <span>Add to Cart</span>
            </span>
          </button>
        ) : (
          <div className="amount__btns">
            <button
              onClick={() => dispatch(decrement(dessert.id))}
              className="amount__change__btn"
            >
              <span className="decrement__btn">-</span>
            </button>
            <span className="amount">{dessert.amount}</span>
            <button
              onClick={() => dispatch(increment(dessert.id))}
              className="amount__change__btn"
            >
              <span className="increment__btn">+</span>
            </button>
          </div>
        )}
      </div>

      <div className="cart__info">
        <p className="cart__info-category">{dessert.category}</p>
        <h3 className="cart__info-name">{dessert.name}</h3>
        <h3 className="cart__info-price">{formatNumber(dessert.price)}</h3>
      </div>
    </li>
  );
}

export default Dessert;
