import { useState } from "react";
import { Expense } from "../types/Expense";

interface Props {
  addExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<Props> = ({ addExpense }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !description) return;

    const newExpense: Expense = {
      id: Date.now().toString(),
      amount: parseFloat(amount),
      category,
      description,
      date: new Date().toISOString(),
    };

    addExpense(newExpense);
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6"
    >
      {/* Amount Field */}
      <div className="relative">
        <label
          htmlFor="amount"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-4 text-lg bg-transparent border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          placeholder=" "
        />
      </div>

      {/* Category Dropdown */}
      <div className="relative">
        <label
          htmlFor="category"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-4 text-lg bg-transparent border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        >
          <option value="">Select a Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Personal">Personal</option>
        </select>
      </div>

      {/* Description Field */}
      <div className="relative">
        <label
          htmlFor="description"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-4 text-lg bg-transparent border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          placeholder=" "
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white text-xl font-semibold rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
