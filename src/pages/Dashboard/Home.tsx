import { useLocalStorage } from "../../hooks/useLocalStorage"; 
import { Expense } from "../../types/Expense"; 
import EcommerceMetrics from "../../components/Home/EcommerceMetrics";
import MonthlySalesChart from "../../components/Home/MonthlySalesChart";
import MonthlySavingTarget from "../../components/Home/MonthlySavingTarget";
import StatisticsChart from "../../components/Home/StatisticsChart";
import DemographicCard from "../../components/Home/DemographicCard";
import RecentExpenses from "../../components/Home/RecentExpenses";

const HomeDashboard = () => {
  const [expenses] = useLocalStorage<Expense[]>("expenses", []); 
  const savingTarget = 1000;

  // Convert id to number in simplifiedExpenses
  const simplifiedExpenses: { id: number; amount: number }[] = (expenses || []).map(expense => ({
    id: Number(expense.id), // Convert id to number
    amount: expense.amount,
  }));

  const totalSpent = (expenses || []).reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <EcommerceMetrics expenses={expenses} />
      <MonthlySalesChart expenses={expenses} />
      
      <MonthlySavingTarget 
        totalSpent={totalSpent} 
        savingTarget={savingTarget} 
        expenses={simplifiedExpenses} 
      />

      <StatisticsChart expenses={expenses} />
      <DemographicCard />
      <RecentExpenses expenses={expenses} />
    </div>
  );
};

export default HomeDashboard;
