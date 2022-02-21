import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navbarShow, setNavbarShow] = useState(false);
  const state = useSelector((state) => state.handleCart);

  return (
    <div
      className="position-sticky top-0 start-0 end-0 zindex-sticky"
      style={{ zIndex: 10, minHeight: "80px" }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container d-flex">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            Shop
          </Link>

          <div className="order-lg-1">
            <Link to="/cart" className="btn btn-outline-dark ms-2 fw-bolder me-2">
              <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
            </Link>

            <button
              className="navbar-toggler rounded-circle p-0 shadow-none border-0"
              type="button"
              style={{ width: "3rem", height: "3rem" }}
              onClick={() => setNavbarShow(!navbarShow)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className={`collapse navbar-collapse${navbarShow ? " show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link className="nav-link fw-bolder" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bolder" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bolder" to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
