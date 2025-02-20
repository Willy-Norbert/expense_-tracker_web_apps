import { Expense } from "../../types/Expense";

interface Props {
  expenses: Expense[];
}

const StatisticsChart: React.FC<Props> = ({ expenses }) => {
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const avgExpense = totalSpent / (expenses.length || 1);

  return (
    <div className="bg-transparent p-4 shadow-xl rounded">
      <h2 className="text-xl mb-4">Statistics</h2>
      <p>Total Spent: <strong>${totalSpent.toFixed(2)}</strong></p>
      <p>Average Expense: <strong>${avgExpense.toFixed(2)}</strong></p>
    </div>
  );
};

export default StatisticsChart;
