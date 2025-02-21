import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import ExpenseForm from "../components/ExpenseForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Expense } from "../types/Expense";

export default function AddExpenses() {
  const [expenses, setExpenses] = useLocalStorage<Expense[]>("expenses", []);
  const [showProgress, setShowProgress] = useState(false);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
    setShowProgress(true);
    setTimeout(() => {
      setShowProgress(false);
    }, 3000); // Keeps the notification for 3 seconds
  };

  return (
    <>
      <PageMeta
        title="React.js Add Expense Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Add Expense Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Add Expense" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
      
        <div className="p-3">
          <ExpenseForm addExpense={addExpense} />
        </div>
      </div>

      {/* Progress Popup */}
      {showProgress && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center space-x-3 p-3 bg-green-500 text-white rounded-lg shadow-lg">
          <svg
            className="w-6 h-6 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" fill="none" />
          </svg>
          <p className="font-semibold">Expense Added Successfully!</p>
        </div>
      )}
    </>
  );
}
