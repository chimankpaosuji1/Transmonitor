import React, { useState } from 'react'
import {
  mainItem,
  paymentItem,
  orderItem,
  profileItem,
} from "../MenuItem/MenuItem";
import "./index.scss";
import { Bellicon } from "../../../Assests/svg";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import ProfileImage from "../../../Assests/img/profileimage.png";

const MobileHeader = () => {

  
  const [active, setActive] = useState({mainItem});
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile_navbar">
      <div className="topbar">
        <h1 className="logo">TransMonitor</h1>
        <div className="right">
          <div className="notification">
            <Bellicon />
            <p className="notification_count">8</p>
          </div>
          <div className="user_info">
            <div className="username">
              <p>Hello</p>
              <p>Ojo</p>
            </div>
            <img src={ProfileImage} alt="avatar" />
          </div>
          {open ? (
            <IoMdClose
              onClick={() => {
                setOpen(!open);
              }}
              className="menubar"
            />
          ) : (
            <CiMenuBurger
              onClick={() => {
                setOpen(!open);
              }}
              className="menubar"
            />
          )}
        </div>
      </div>
      <div className={`menu ${open ? "open" : "close"}`}>
        <div className="flex">
          <button>GENERATE INVOICE</button>
        </div>
        <div className="navigation">
          <div className="main">
            <h3>Main</h3>
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
          <div className="payments">
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
          <div className="bottom">
            <div className="nav">
              <p>Support</p>
            </div>
            <div className="nav">
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader