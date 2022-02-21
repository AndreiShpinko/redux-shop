import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import Message from "../components/Message";
import { emptyCart } from "../redux/action";

const Cart = () => {
  const products = useSelector((store) => store.handleCart);
  const dispatch = useDispatch();

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  const toNormalPrice = (price) => {
    return +price.toFixed(1).slice(-1) === 0
      ? Math.round(price)
      : price.toFixed(1);
  };

  const renderProducts = (
    <>
      <div className="cart pt-header">
        <div className="container my-4">
          <div className="row d-flex justify-content-between">
            <div className="col">
              <h1 className="lead fw-bold m-0">
                Total: $
                {toNormalPrice(
                  products
                    .map((product) => product.qty * product.price)
                    .reduce((prev, next) => prev + next, 0)
                )}
              </h1>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-outline-dark fw-600 me-4"
                onClick={() => handleEmptyCart()}
              >
                Empty cart
              </button>
              <Link
                to="/contacts"
                className="btn btn-outline-dark fw-600"
                onClick={() => handleEmptyCart()}
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
        {products.map((product) => (
          <CartProduct product={product} functionNormalPrice={toNormalPrice} />
        ))}
      </div>
    </>
  );

  if (products.length === 0)
    return (
      <div className="min-vh-100 one-page">
        <Message imgPath="emptyCart.png" message="You don`t choise products" />
      </div>
    );
  else return renderProducts;
};

export default Cart;
