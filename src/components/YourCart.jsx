import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderConfirmed from "./OrderConfirmed";
import { formatNumber } from "../utils";

function YourCart() {
  const { desserts, totalAmount, totalPrice } = useSelector(
    (store) => store.cart
  );
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <OrderConfirmed setShowModal={setShowModal} />}
      <div className="your__cart">
        <h3 className="cart__amount">YourCart({totalAmount})</h3>
        {desserts.map((dessert) => {
          return dessert.amount !== 0 && <CartItem key={dessert.id} dessert={dessert} />;
        })}
        {totalAmount == 0 && (
          <div className="your__cart__empty">
            <img
              src="../images/illustration-empty-cart.svg"
              alt=""
              width={128}
              height={128}
            />
            <p className="cart__item">Your added items will appear here.</p>
          </div>
        )}
        {totalAmount !== 0 && (
          <div>
            <div className="order__total">
              <p>Order Total</p>
              <h2>{formatNumber(totalPrice)}</h2>
            </div>
            <div className="delivery">
              <img src="./images/icon-carbon-neutral.svg" alt="" />
              <p>
                This is a <strong> carbon-neutral </strong> 
                delivery
              </p>
            </div>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="order__btn"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default YourCart;
