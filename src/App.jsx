import "./App.css";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpense from "./components/incomeExpense";
import TransectionHistory from "./components/transectionHistory";
import AddTransection from "./components/addTransection";
import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransectionHistory />
        <AddTransection />
      </div>
    </GlobalProvider>
  );
}

export default App;
