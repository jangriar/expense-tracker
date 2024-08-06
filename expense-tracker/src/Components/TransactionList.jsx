import React from 'react';

const TransactionList = () => {
  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold mb-4">History</h3>
      <ul className="bg-white shadow-lg rounded-lg p-6">
        <li className="flex justify-between my-2 p-2 border-b">
          <span>Sample Transaction</span>
          <span className="text-red-500"> 500.00</span>
        </li>
        {/* Repeat similar <li> elements for each transaction */}
      </ul>
    </div>
  );
};

export default TransactionList;
