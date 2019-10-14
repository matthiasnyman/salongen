import React from "react";
import star from "../img/star.svg";

function Stars() {
  return (
    <div className="stars">
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <small>
        (4)
      </small>
    </div>
  );
}

export default Stars;
