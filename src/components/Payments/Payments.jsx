import React, { useState } from "react";
import "./index.scss"
import {
  MdKeyboardArrowDown
} from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Payments = () => {
  const [active, setActive] = useState("1");
  const [payment, setPayment] = useState("All");
  const paymentStatus = [
    "Reconciled",
    "Pending",
    "Reconciled",
    "Reconciled",
    "Pending",
    "Un-reconciled",
    "Reconciled",
    "Un-reconciled",
    "Pending",
  ];

  

    const PaymentData = ({ status }) => {
      return (
        <div className="payment_data">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="stat">
            <div className={`status ${status.toLowerCase()}`}>
              <div className="dot"></div>
              {status}
            </div>
            <MdKeyboardArrowDown />
          </div>
        </div>
      );
    };

  const PaymentSelection = () => {
    const [open, setOpen] = useState(false);
    

    const selections = [
      "All",
      "Reconciled",
      "Un-reconciled",
      "Settled",
      "Un-settled",
    ];

    return (
      <div className="payment_selection">
        <p>Show</p>
        <div
          className="select"
           onClick={() => setOpen(false) || setOpen(true)}
        >
          <p>{payment}</p>
          <MdKeyboardArrowDown color="primary" />
        </div>
        <ul className={`selections ${open ? "open" : "close"}`}>
          {selections.map((item) => (
            <li
              onClick={() => {
                setPayment(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="payments">
      <h2>Payments</h2>
      <div className="payment_info">
        <div className="right">
          <p className="paymentCountHeader">
            Showing{" "}
            <span className="paymentCount">
              <span>20</span> <MdKeyboardArrowDown />
            </span>
            out of 500 payments
          </p>
          <div className="search">
            <label htmlFor="payments-search">
              <CiSearch />
            </label>
            <input
              type="text"
              name="search"
              id="payments-search"
              placeholder="Search payments"
              autoComplete="off"
            />
          </div>
        </div>
        <PaymentSelection />
      </div>
      <div className="table_wrap">
        {" "}
        <div className="payment_table">
          <div className="header">
            <p>Item Type</p>
            <p>Price</p>
            <p>Transaction No</p>
            <p>Time</p>
            <p>Status </p>
          </div>

          {payment === "All"
            ? paymentStatus.map((item) => <PaymentData status={item} />)
            : paymentStatus
                .filter((pay) => pay === payment)
                .map((item) => <PaymentData status={item} />)}
        </div>
      </div>

      <div className="bottom">
        <p>Showing 1 to 10 of 500 entries</p>
        <div className="pagination">
          <div
            onClick={() => {
              setActive(1);
            }}
            className="prev"
          >
            Previous
          </div>
          <div className={`page ${active === 1 ? "active" : ""}`}>1</div>
          <div className={`page ${active === 2 ? "active" : ""}`}>2</div>
          <div
            onClick={() => {
              setActive(2);
            }}
            className="next"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments