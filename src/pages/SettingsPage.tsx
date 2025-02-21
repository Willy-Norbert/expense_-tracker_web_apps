import { useLocalStorage } from "../hooks/useLocalStorage";
import Settings from "../pages/Settings";

function SettingsPage() {
  const [, setExpenses] = useLocalStorage<number[]>("expenses", []); // Ignore unused 'expenses'

  // Function to reset expenses
  function resetExpenses() {
    setExpenses([]); // Reset to an empty array
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Settings</h2>
      <Settings resetExpenses={resetExpenses} setExpenses={setExpenses} />
    </div>
  );
}

export default SettingsPage;
