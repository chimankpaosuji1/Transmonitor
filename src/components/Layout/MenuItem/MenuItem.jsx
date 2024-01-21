import React from 'react'
import {
  Overview,
  AllPayments,
  ReconcilledPayments,
  UnReconcilledPayments,
  ManualSettlements,
  AllOrders,
  PendingOrders,
  ReconcilledOrders,
  MerchantProfile,
} from "../../../Assests/svg";

export const mainItem = [
  {name: "Overview", icon: <Overview/>}
]
export const paymentItem = [
  { name: "All Payments", icon: <AllPayments/> },
  { name: "Reconciled Payments", icon: <ReconcilledPayments/> },
  { name: "Un - Reconciled Payments", icon: <UnReconcilledPayments/> },
  { name: "Manual Settlement", icon: <ManualSettlements/> },
];

 export const orderItem = [
   { name: "All Orders", icon: <AllOrders/> },
   { name: "Pending Orders", icon: <PendingOrders/> },
   { name: "Reconciled Orders", icon: <ReconcilledOrders/> },
 ];

 export const profileItem = [{ name: "Merchant Profile", icon: <MerchantProfile/> },];