import React, { useState, useEffect } from "react";
import { addItem, deleteItem, removeProduct } from "../redux/action";
import { useDispatch } from "react-redux";

const CartProduct = (props) => {
  const { product, functionNormalPrice } = props;
  const dispatch = useDispatch();
  const [qualityProduct, setQualityProduct] = useState(product.qty);

  useEffect(() => {
    setQualityProduct(product.qty);
  });

  const handlePlusButton = (product) => {
    dispatch(addItem(product));
    setQualityProduct(++qualityProduct);
  };

  const handleMinusButton = (product) => {
    dispatch(deleteItem(product));
    setQualityProduct(--qualityProduct);
  };

  const handleRemoveButton = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="cart__product bg-light my-4 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <div style={{ maxWidth: "250px" }}>
              <img
                src={product.image}
                alt={product.title}
                className="img-contain"
              />
            </div>
          </div>
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start mt-4 mt-md-0">
            <h3>{product.title}</h3>
            <p className="lead fw-600">
              {product.qty} * ${product.price} = $
              {functionNormalPrice(product.qty * product.price)}
            </p>
            <div>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleMinusButton(product)}
                disabled={qualityProduct < 2}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handlePlusButton(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
              <button
                className="btn btn-outline-dark fw-bold"
                onClick={() => handleRemoveButton(product)}
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
