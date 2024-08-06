import React, { useState } from 'react';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold mb-4">Add New Transaction</h3>
      <form className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Amount <br />
            <small>(negative - expense, positive - income)</small>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
