import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../app/features/cartSlice";
import { formatNumber } from "../utils";

function CartItem({ dessert }) {
  const { totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="cart__wrapper">
        <ul className="dessert__list">
          <li key={dessert.id} className="dessert__list-item">
            <div className="dessert__info">
              <p className="dessert__list-name">{dessert.name}</p>
              <div className="total">
                <span>{dessert.amount}x</span>
                <p>@ {formatNumber(dessert.price)}</p>
                <b>{formatNumber((dessert.price || 0) * (dessert.amount || 0))}</b>
              </div>
            </div>
            <div
              onClick={() => dispatch(removeFromCart(dessert.id))}
              className="remove"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#CAAFA7"
                  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CartItem;
