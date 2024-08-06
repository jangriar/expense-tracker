import React from 'react';

const IncomeExpenses = () => {
  return (
    <div className="flex justify-between bg-white shadow-lg rounded-lg p-6 my-4">
      <div className="w-1/2 text-center">
        <h3 className="text-xl font-semibold">Income</h3>
        <p className="text-green-500 text-2xl font-bold mt-2">+$0.00</p>
      </div>
      <div className="w-1/2 text-center border-l-2">
        <h3 className="text-xl font-semibold">Expenses</h3>
        <p className="text-red-500 text-2xl font-bold mt-2">-$0.00</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
