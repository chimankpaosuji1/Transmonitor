import React from 'react'
import ChartBox from "./ChartBox/ChartBox.jsx";
import "./index.scss"

const Charts = () => {
  return (
    <div className='chart'>
      <ChartBox />
      <div className="chart_data">
        <div className="card">
          <span className="cardHeader">Orders</span>
          <div className="progressBar">
            <span></span>
          </div>
          <div className="progress">
            <p>
              Pending Orders: <span className="pending">20</span>
            </p>
            <p>
              Reconcilled Orders: <span className="reconcilled">80</span>
            </p>
            <p>
              Total Orders: <span className="total">100</span>
            </p>
          </div>
        </div>

        <div className="card">
          <span className="cardHeader">Payments</span>
          <div className="progressBar">
            <span></span>
          </div>
          <div className="progress">
            <p>
              Un-reconcilled Payments: <span className="pending">20</span>
            </p>
            <p>
              Reconcilled Payments: <span className="reconcilled">80</span>
            </p>
            <p>
              Total Payments: <span className="total">100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts