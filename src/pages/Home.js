import React from "react";

const Home = () => {
  return (
    <div className="min-vh-100 one-page">
      <div className="card bg-dark text-white border-0 vh-100" id="home">
        <img
          src={require("../assets/bg.jpg")}
          alt="Background image"
          className="card-img img-cover"
        />
        <div
          className="card-img-overlay flex-center"
          style={{ backdropFilter: "blur(3px)" }}
        >
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
