import React from "react";
import "./modal.css";

const modal = ({ setShowModal }) => {
  return (
    <div className="modal__wrapper" onClick={() => setShowModal(false)}>
      <div className="single__modal">
        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">5.89 ETH</span>
        </p>

        <div className="input__item">
          <input type="number" placeholder="00 : 00 ETH" />
        </div>

        <div className="input__item">
          <h6>Enter Quantity, 7 avaliable</h6>
          <input type="number" placeholder="00 : 00 ETH" />
        </div>
        <p className="d-flex aling-items-center justify-content-between">
          You must bid at least <span className="money">5.89 ETH</span>
        </p>

        <div className="d-flex aling-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money ">0.89 ETH</span>
        </div>

        <div className="d-flex aling-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">5.89 ETH</span>
        </div>

        <button className="place__bid-btn">place a Bid</button>
      </div>
    </div>
  );
};

export default modal;
