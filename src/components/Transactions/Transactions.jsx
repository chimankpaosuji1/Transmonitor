import React from 'react'
import { Statistics } from "../../Assests/svg";
import "./index.scss"

const Transactions = () => {
  return (
    <div className="transactions">
      <div className="card">
        <div className="cardContent">
          <div className="text">
            <span>Daily Transaction Volume</span>
            <span>2,342</span>
          </div>
          <div>
            <Statistics />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="cardContent">
          <div className="text">
            <span>Daily Transaction Value</span>
            <span>₦4,000,000</span>
          </div>
          <div>
            <Statistics />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="cardContent">
          <div className="text">
            <span>Total Transaction Volume</span>
            <span>452,000</span>
          </div>
          <div>
            <Statistics />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="cardContent">
          <div className="text">
            <span>Total Transaction Value</span>
            <span>₦4,000,000</span>
          </div>
          <div>
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions