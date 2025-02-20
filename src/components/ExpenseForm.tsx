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
    <form onSubmit={handleSubmit} className="p-4 bg-transparent rounded shadow-md">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-3 rounded-sm bg-transparent"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full mb-3 rounded-sm bg-transparent"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-3 rounded-sm bg-transparent"
      />
      <button className="bg-blue-600 text-white p-2 w-full">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
