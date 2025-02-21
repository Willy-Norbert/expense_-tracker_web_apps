import { Expense } from "../../types/Expense";

interface Props {
  expenses: Expense[];
}

const StatisticsChart: React.FC<Props> = ({ expenses }) => {
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const avgExpense = totalSpent / (expenses.length || 1);

  return (
    <div className="bg-white p-6 shadow-xl rounded-lg border border-gray-200 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Expense Statistics</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-gray-700">Total Spent:</p>
          <p className="font-semibold text-green-600">RWF{totalSpent.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Average Expense:</p>
          <p className="font-semibold text-blue-600">RWF{avgExpense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
