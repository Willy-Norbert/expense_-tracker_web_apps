import { Expense } from "../../types/Expense";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

interface Props {
  expenses: Expense[];
}

const MonthlySalesChart: React.FC<Props> = ({ expenses }) => {
  const monthlyExpenses: { [month: string]: number } = {};

  expenses.forEach((expense) => {
    const month = new Date(expense.date).toLocaleString("default", { month: "short" });
    monthlyExpenses[month] = (monthlyExpenses[month] || 0) + expense.amount;
  });

  const data = {
    labels: Object.keys(monthlyExpenses),
    datasets: [
      {
        label: "Monthly Expenses",
        data: Object.values(monthlyExpenses),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-transparent p-4 shadow-xl rounded">
      <h2 className="text-xl mb-4">Monthly Expense Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default MonthlySalesChart;
