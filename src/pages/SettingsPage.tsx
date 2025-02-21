import { useLocalStorage } from "../hooks/useLocalStorage";
import Settings from "../pages/Settings";

function SettingsPage() {
  const [expenses, setExpenses] = useLocalStorage("expenses", 0); // Initialize with 0 for simplicity
  const [currency, setCurrency] = useLocalStorage("currency", "USD");

  function resetExpenses() {
    setExpenses(0); // Reset expenses to 0 instead of an empty array
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Settings</h2>
      <Settings 
        resetExpenses={resetExpenses} 
        setCurrency={setCurrency} 
        currency={currency} 
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  );
}

export default SettingsPage;
