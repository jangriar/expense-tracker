import React, { useState } from 'react';
import Header from './Components/Header';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';


function App() {
  const [transactions, setTransactions] = useState([]);

  // Add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <Header />
        <Balance />
        <IncomeExpenses />
        <AddTransaction transactions={transactions} />
        <TransactionList onAdd={addTransaction} />

      </div>
    </div>
  );
}

export default App;
