import { useLocalStorage } from "../../hooks/useLocalStorage"; // Fixed path assuming it's in src/hooks/
import { Expense } from "../../types/Expense"; // Make sure Expense type is correctly imported
import EcommerceMetrics from "../../components/Home/EcommerceMetrics";
import MonthlySalesChart from "../../components/Home/MonthlySalesChart";
import MonthlySavingTarget from "../../components/Home/MonthlySavingTarget";
import StatisticsChart from "../../components/Home/StatisticsChart";
import DemographicCard from "../../components/Home/DemographicCard";
import RecentExpenses from "../../components/Home/RecentExpenses";

const HomeDashboard = () => {
  const [expenses] = useLocalStorage<Expense[]>("expenses", []); // Fetching expenses from localStorage
  const savingTarget = 1000; // Example saving target

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <EcommerceMetrics expenses={expenses} />
      <MonthlySalesChart expenses={expenses} />
      <MonthlySavingTarget 
  totalSpent={expenses.reduce((sum, exp) => sum + exp.amount, 0)} 
  savingTarget={savingTarget} 
  expenses={expenses} // Add this to correctly pass the expenses array
/>

      <StatisticsChart expenses={expenses} />
      <DemographicCard />
      <RecentExpenses expenses={expenses} />
    </div>
  );
};

export default HomeDashboard;
