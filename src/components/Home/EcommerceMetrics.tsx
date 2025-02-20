import { Expense } from "../../types/Expense";

interface Props {
  expenses: Expense[];
}

const EcommerceMetrics: React.FC<Props> = ({ expenses }) => {
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalTransactions = expenses.length;

  return (
    <div className="bg-transparent  p-4 shadow-xl rounded">
      <h2 className="text-xl mb-4">Financial Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-500 text-white rounded">
          <h3 className="text-lg">Total Expenses</h3>
          <p className="text-2xl font-bold">${totalSpent.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-green-500 text-white rounded">
          <h3 className="text-lg">Transactions</h3>
          <p className="text-2xl font-bold">{totalTransactions}</p>
        </div>
      </div>
    </div>
  );
};

export default EcommerceMetrics;
