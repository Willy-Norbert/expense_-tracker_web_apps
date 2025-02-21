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
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Expense" />
      <div className="space-y-6">
        <ComponentCard >
          <div className="p-4">
            <h2 className="text-xl mb-4">Expense List</h2>
            <ExpenseLists expenses={expenses} deleteExpense={deleteExpense} />
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
