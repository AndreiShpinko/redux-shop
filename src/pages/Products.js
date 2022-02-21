import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  let componentMount = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMount = false;
      };
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (category === "All") {
      setFilter(data);
    } else {
      const updateList = data.filter(
        (x) => x.category === category.toLowerCase()
      );
      setFilter(updateList);
    }
  }, [category]);

  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="mb-3 mb-md-4 mb-lg-5 d-flex justify-content-center">
          <form
            onChange={(e) => handleCategory(e.target.id)}
            className="d-flex flex-wrap justify-content-evenly"
          >
            {[
              "All",
              "Men's clothing",
              "Women's clothing",
              "Jewelery",
              "Electronics",
            ].map((cat) => {
              return (
                <div className="mx-1 my-1">
                  <input
                    type="radio"
                    className="btn-check"
                    name="categories"
                    id={cat}
                    checked={category === cat}
                  />
                  <label className="btn btn-outline-dark" htmlFor={cat}>
                    {cat}
                  </label>
                </div>
              );
            })}
          </form>
        </div>

        <div className="row justify-content-center">
          {filter.map((product) => {
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mx-0"
                key={product.id}
              >
                <Link to={`/products/${product.id}`} className="card-link w-100">
                  <div className="card h-100 p-2">
                    <div
                      className="position-relative w-100"
                      style={{ paddingTop: "100%" }}
                    >
                      <div className="position-absolute top-0 bottom-0 w-100 h-100">
                        <img
                          src={product.image}
                          className="card-img-top h-100"
                          alt={product.title}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">
                        {product.title.substring(0, 34)}...
                      </h5>
                      <div>
                        <p className="card-text lead fw-bold m-0">
                          ${product.price}
                        </p>
                        <p className="card-text">{product.category}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12">
          <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
          <hr />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {loading ? <Loader /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
