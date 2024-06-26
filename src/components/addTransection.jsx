import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalState";


const AddTransection = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransections } = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();

    const newTransection = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransections(newTransection)
    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransection;
