import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";


const Transection = ({ transection }) => {
  const { deleteTransections } = useContext(GlobalContext);

  const sign = transection.amount < 0 ? "-" : "+";
  return (
    <li className={transection.amount < 0 ? 'minus' : 'plus'}>
      {transection.text}{" "}
      <span>
        {sign}${Math.abs(transection.amount)}
      </span>
      <button onClick={()=> deleteTransections(transection.id)} className="delete-btn">x</button>
    </li>
  );
};

export default Transection;
