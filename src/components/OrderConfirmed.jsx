import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../app/features/cartSlice";
import { formatNumber } from "../utils";

function OrderConfirmed({ setShowModal }) {
  const { totalPrice, desserts } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(desserts);
  return (
    <>
      <div onClick={() => setShowModal(false)} className="modal__overlay">
        <div className="modal">
          <div className="order">
            <img
              src="./images/icon-order-confirmed.svg"
              width={48}
              height={48}
              alt=""
            />
            <h1>Order Confirmed</h1>
            <span className="order__enjoy">We hope you enjoy your food!</span>
          </div>
          {desserts.map((dessert) => {
            return (
              dessert.amount !== 0 && (
                <div key={dessert.id}>
                  <ul className="dessert__list order__list">
                    <li key={dessert.id} className="list__item">
                      <div className="order__info">
                        <img
                          src={dessert.image.thumbnail}
                          width={48}
                          height={48}
                          alt=""
                        />
                        <div>
                          <p className="dessert__name">{dessert.name}</p>
                          <div className="total">
                            <span>{dessert.amount}x</span>
                            <p> @{formatNumber(dessert.price)}</p>
                          </div>
                        </div>
                      </div>
                      <b>{formatNumber(dessert.price* dessert.amount) }</b>
                    </li>
                  </ul>
                </div>
              )
            );
          })}
          <div className="order__total total__btn">
            <p>Order Total</p>
            <h2>{formatNumber(totalPrice)}</h2>
          </div>
          <button
            onClick={() => {
              dispatch(resetCart());
            }}
            className="order__btn"
          >
            Start New Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderConfirmed;
