import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button style={{backgroundColor: " rgb(6, 172, 0)"}}
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add Item to Cart
      </button>
      <button style={{backgroundColor:"rgb(221, 52, 66)"}}
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Remove Item to Cart
      </button>
    </div>
  );
};

export default Cart;