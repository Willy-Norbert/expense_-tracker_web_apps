import { Expense } from "../../types/Expense";

interface Props {
  expenses: Expense[];
}

const RecentExpenses: React.FC<Props> = ({ expenses }) => {
  const recentExpenses = expenses.slice(-5);

  return (
    <div className="bg-transparent p-4 shadow-xl rounded">
      <h2 className="text-xl mb-4">Recent Expenses</h2>
      {recentExpenses.length === 0 ? (
        <p>No recent expenses.</p>
      ) : (
        <ul>
          {recentExpenses.map((expense) => (
            <li key={expense.id} className="border-b p-2">
              {expense.description} - <strong>${expense.amount.toFixed(2)}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentExpenses;
