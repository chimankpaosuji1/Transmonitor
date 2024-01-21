import React from "react";
import DashboardHeader from "../components/Layout/DashboardHeader.jsx";
import DashboardSideBar from "../components/Layout/DashboardSideBar.jsx";
import DashboardHero from "../components/DashboardHero.jsx";

const DashboardPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div>
        <DashboardSideBar active={1} />
      </div>
      <DashboardHero />
    </div>
  );
};

export default DashboardPage;
