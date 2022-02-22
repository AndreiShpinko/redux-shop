import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navbarShow, setNavbarShow] = useState(false);
  const state = useSelector((state) => state.handleCart);

  return (
    <div
      className="position-relative top-0 start-0 end-0"
      style={{ zIndex: 10, minHeight: "80px" }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container d-flex">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            Shop
          </Link>

          <div className="order-lg-1">
            <Link
              to="/cart"
              className="btn btn-outline-dark ms-2 fw-bolder me-2"
            >
              <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
            </Link>

            <button
              class="navbar-toggler rounded-circle p-0 shadow-none border-0 bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className='collapse navbar-collapse'
            id="navbarNav"
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
