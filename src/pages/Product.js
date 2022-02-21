import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addItem, removeProduct } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productStatus, setProductStatus] = useState(
    useSelector((state) => state.handleCart).some((x) => x.id === id)
  );

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const handleCartBtn = () => {
    (productStatus)?dispatch(removeProduct(product)):dispatch(addItem(product));
    setProductStatus(!productStatus);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div style={{ height: "350px" }}>
            <img
              src={product.image}
              alt={product.title}
              className="img-contain"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star ms-2"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <div className="d-flex justify-content-center justify-content-md-start">
            <button
              className={`btn btn-outline-dark px-4 py-2${productStatus?' active':''}`}
              onClick={handleCartBtn}
            >
              {productStatus ? "Remove from Cart" : "Add to Cart"}
            </button>
            <Link className="btn btn-dark ms-2 px-3" to={"/cart"}>
              Go to Cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container pt-header">
        <div className="row py-4">{loading ? <Loader /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
