import PageBreadcrumb from "../components/common/PageBreadCrumb";

import PageMeta from "../components/common/PageMeta";
import ExpenseForm from "../components/ExpenseForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Expense } from "../types/Expense";

export default function AddExpenses  () {
  const [expenses, setExpenses] = useLocalStorage<Expense[]>("expenses", []);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <>
      <PageMeta
        title="React.js Add Expense Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Add Expense Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Add Expense" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
         Expenses
        </h3>
        <div className="p-4">
      <h2 className="text-xl mb-4">Add Expense</h2>
      <ExpenseForm addExpense={addExpense} />
    </div>
      </div>
    </>
  );
}
