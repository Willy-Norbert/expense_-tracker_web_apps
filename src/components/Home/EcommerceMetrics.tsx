import { Expense } from "../../types/Expense";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  expenses: Expense[];
}

const EcommerceMetrics: React.FC<Props> = ({ expenses }) => {
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalTransactions = expenses.length;

  const data = {
    labels: ["Total Expenses", "Transactions"],
    datasets: [
      {
        data: [totalSpent, totalTransactions],
        backgroundColor: ["#4F8A10", "#F49F1C"],
        hoverBackgroundColor: ["#3E6E0F", "#D7860A"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow-2xl rounded-lg border border-gray-200 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Financial Overview</h2>

      <div className="flex justify-center items-center">
        <div className="w-full sm:w-3/4 lg:w-2/3">
          <Pie
            data={data}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => {
                      const value = tooltipItem.raw as number;
                      return `${tooltipItem.label}: ${value.toFixed(2)}`;
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EcommerceMetrics;
