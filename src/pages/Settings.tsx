import React from "react";

interface Props {
  resetExpenses: () => void;
  setCurrency: (currency: string) => void;
  currency: string;
}

function Settings({ resetExpenses, setCurrency, currency }: Props) {
  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h2 className="text-xl mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block mb-2">Select Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
        </select>
      </div>
      <button
        onClick={resetExpenses}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Reset All Data
      </button>
    </div>
  );
}

export default Settings;
