import React from "react";
import Transactions from "../Transactions/Transactions.jsx";
import Charts from "../Charts/Charts.jsx";
import Payments from "../Payments/Payments.jsx";
import "./index.scss"

const DashboardHero = () => {
  return (
    <div className="dashboardhero">
      <Transactions />
      <Charts />
      <Payments />
    </div>
  );
};

export default DashboardHero;
