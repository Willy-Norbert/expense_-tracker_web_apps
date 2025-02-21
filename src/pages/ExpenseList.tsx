import PageBreadcrumb from "../components/common/PageBreadCrumb";
import ComponentCard from "../components/common/ComponentCard";
import PageMeta from "../components/common/PageMeta";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Expense } from "../types/Expense";
import ExpenseLists from "../components/ExpenseLists";

export default function ExpenseList() {
  const [expenses, setExpenses] = useLocalStorage<Expense[]>("expenses", []);

  function deleteExpense(id: string) {
    const updatedExpenses = expenses.filter(function (expense) {
      return expense.id !== id;
    });
    setExpenses(updatedExpenses);
  }

  return (
    <>
      <PageMeta
        title="ExpenseList"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Basic Tables" />
      <div className="space-y-6">
        <ComponentCard title="Basic Table 1">
          <div className="p-4">
            <h2 className="text-xl mb-4">Expense List</h2>
            <ExpenseLists expenses={expenses} deleteExpense={deleteExpense} />
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
