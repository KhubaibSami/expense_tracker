import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const Balance = () => {
  const { transections } = useContext(GlobalContext);
  const amounts = transections.map(transection => transection.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <div>${total}</div>
    </div>
  )
}

export default Balance