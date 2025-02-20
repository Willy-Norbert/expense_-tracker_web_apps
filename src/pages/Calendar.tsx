import { useLocalStorage } from "../hooks/useLocalStorage";
import { Expense } from "../types/Expense";
import ExpenseCalendar from "../pages/ExpenseCalendar";

function Calendar() {
  const [expenses] = useLocalStorage<Expense[]>("expenses", []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Calendar</h2>
      <ExpenseCalendar expenses={expenses} />
    </div>
  );
}

export default Calendar;
