import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import Transection from "./transection";

const TransectionHistory = () => {
  const { transections } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transections.map((transection,i) => (<Transection transection={transection} key={i}/>))}
      </ul>
    </>
  );
};

export default TransectionHistory;
