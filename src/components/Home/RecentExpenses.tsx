import { Expense } from "../../types/Expense";

interface Props {
  expenses: Expense[];
}

const RecentExpenses: React.FC<Props> = ({ expenses }) => {
  const recentExpenses = expenses.slice(-5);

  return (
    <div className="bg-white p-6 shadow-xl rounded-lg border border-gray-200 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Recent Expenses</h2>
      {recentExpenses.length === 0 ? (
        <p className="text-gray-700 text-center">No recent expenses.</p>
      ) : (
        <ul className="space-y-4">
          {recentExpenses.map((expense) => (
            <li key={expense.id} className="flex justify-between items-center border-b border-gray-200 p-4 hover:bg-gray-50 rounded-lg transition-all">
              <span className="text-gray-800">{expense.description}</span>
              <span className="font-semibold text-green-600">RWF{expense.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentExpenses;
