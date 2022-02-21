import React from "react";

const Message = (props) => {
  const { imgPath, message } = props;
  return (
    <div className="message h-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <div className="w-50">
            <img
              src={require(`../assets/${imgPath}`)}
              alt={message}
              className="w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 className="card-title display-3 fw-bolder mb-0 text-center">{message}</h1>
        </div>
      </div>
    </div>
  );
};

export default Message;
