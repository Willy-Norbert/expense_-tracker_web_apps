import { Expense } from "../../types/Expense";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  expenses: Expense[];
}

const MonthlySalesChart: React.FC<Props> = ({ expenses }) => {
  // Aggregate expenses by category
  const categoryExpenses: { [category: string]: number } = {};

  expenses.forEach((expense) => {
    const category = expense.category; // Assuming 'category' field exists in 'Expense'
    categoryExpenses[category] = (categoryExpenses[category] || 0) + expense.amount;
  });

  // Chart data configuration
  const data = {
    labels: Object.keys(categoryExpenses), // Categories
    datasets: [
      {
        data: Object.values(categoryExpenses), // Expense amounts for each category
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F7633D", "#C9F7F5", // You can add more colors as needed
        ],
        hoverBackgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F7633D", "#C9F7F5", // Hover colors
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow-xl rounded-lg border border-gray-200 max-w-full mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
        Expense Distribution by Category
      </h2>
      <div className="relative h-64 md:h-80">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default MonthlySalesChart;
