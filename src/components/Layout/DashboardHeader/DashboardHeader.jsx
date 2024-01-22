import React from 'react'
import { Bellicon } from "../../../Assests/svg";
import ProfileImage from "../../../Assests/img/profileimage.png";
import './index.scss'
import { CiSearch } from "react-icons/ci";

const DashboardHeader = () => {
  return (
    <div className="dashboardheader">
      <div className="left">
        <h1 className="logo">TransMonitor</h1>
        <div className="search">
          <div className="search_icon">
            <CiSearch />
          </div>
          <input type="text" placeholder="Search...." />
        </div>
      </div>
      <ul className="right">
        <li>Support</li>
        <li>FAQ</li>
        <li>
          <Bellicon />
          <p className="notification">8</p>
        </li>
        <li className="user_info">
          <div className="username">
            <p>Hello</p>
            <p>Oluwaleke Ojo</p>
          </div>
          <img src={ProfileImage} alt="avatar" />
        </li>
      </ul>
    </div>
  );
};

export default DashboardHeader