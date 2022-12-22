import React from "react";
import "./modal.css";

const modal = () => {
  return (
    <div className="modal__wrapper">
      <div className="modal">
        <h6>Place a Bid</h6>
        <p>
          You must bid at least <span>5.89 ETH</span>
        </p>
      </div>
    </div>
  );
};

export default modal;
