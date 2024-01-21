import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  mainItem,
  paymentItem,
  orderItem,
  profileItem,
} from "../MenuItem/MenuItem";
import "./index.scss"

const DashboardSideBar = () => {
  const [active, setActive] = useState({ mainItem });

  return (
    <div className="sidebar">
      <button>GENERATE INVOICE</button>
      <div className="navigation">
        <div className="main">
          <h3>Main</h3>
          <Link to="/" className="">
            <li></li>
          </Link>
          <ul>
            {mainItem.map((item) => (
              <li
                onClick={() => setActive(item.name)}
                className={`nav ${active === item.name ? "active" : ""}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="payment">
          <h3>Payments</h3>
          <ul>
            {paymentItem.map((item) => (
              <li
                onClick={() => setActive(item.name)}
                className={`nav ${active === item.name ? "active" : ""}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="orders">
          <h3>Orders</h3>
          <ul>
            {orderItem.map((item) => (
              <li
                onClick={() => setActive(item.name)}
                className={`nav ${active === item.name ? "active" : ""}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile">
          <ul>
            {profileItem.map((item) => (
              <li
                onClick={() => setActive(item.name)}
                className={`nav ${active === item.name ? "active" : ""}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
