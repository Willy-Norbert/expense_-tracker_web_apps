import { useLocalStorage } from "../hooks/useLocalStorage";
import Settings from "../pages/Settings";

function SettingsPage() {
  const [, setExpenses] = useLocalStorage("expenses", []);
  const [currency, setCurrency] = useLocalStorage("currency", "USD");

  function resetExpenses() {
    setExpenses([]);
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Settings</h2>
      <Settings resetExpenses={resetExpenses} setCurrency={setCurrency} currency={currency} />
    </div>
  );
}

export default SettingsPage;
