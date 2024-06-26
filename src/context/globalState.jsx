import react, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState = {
  transections: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispacth] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransections(id) {
    dispacth({
      type: "DELETE_TRANSECTION",
      payload: id,
    });
  }
  function addTransections(transection) {
    dispacth({
      type: "ADD_TRANSECTION",
      payload: transection,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transections: state.transections,
        deleteTransections,
        addTransections,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
