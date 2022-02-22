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
    <div className="bg-light my-4 py-4" id="cart__product">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <div className="position-relative w-100 pt-100">
              <div className="position-absolute top-0 bottom-0 w-100 h-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top img-contain"
                />
              </div>
            </div>
          </div>

          <div className="col-md-7 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start mt-4 mt-md-0">
            <h3>{product.title}</h3>
            <p className="lead fw-bolder">
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
