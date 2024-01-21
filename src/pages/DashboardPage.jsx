import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/Layout/DashboardHeader/DashboardHeader.jsx";
import MobileHeader from "../components/Layout/MobileHeader/MobileHeader.jsx";
import DashboardSideBar from "../components/Layout/DashboardSideBar/DashboardSideBar.jsx";
import DashboardHero from "../components/DashboardHero/DashboardHero.jsx";
import "./index.scss";

const DashboardPage = () => {
  const [mobile, setMobile] = useState(false);

  const HandleDashboardLayout = (params) => {
    setMobile(window.innerWidth <= 1200);
  };

  useEffect(() => {
    HandleDashboardLayout();
    window.addEventListener("resize", HandleDashboardLayout);
    return () => window.removeEventListener("resize", HandleDashboardLayout);
  }, []);

  return (
    <div className="dashboard">
      {mobile ? <MobileHeader /> : <DashboardHeader />}
      <div className="dashboard_view">
        {mobile ? <></> : <DashboardSideBar />}
        <DashboardHero />
      </div>
    </div>
  );
};

export default DashboardPage;
