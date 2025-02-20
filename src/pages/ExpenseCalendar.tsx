import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Expense } from "../types/Expense";
import "../calendarStyles.css";


interface Props {
  expenses: Expense[];
}

const ExpenseCalendar: React.FC<Props> = ({ expenses }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      setSelectedDate(date[0]); // Select the first date if an array
    } else {
      setSelectedDate(date);
    }
  };

  const filteredExpenses = selectedDate
    ? expenses.filter(
        (expense) =>
          new Date(expense.date).toDateString() === selectedDate.toDateString()
      )
    : [];

  return (
    <div className="bg-transparent p-4 shadow-md rounded">
      <h2 className="text-xl mb-4">Expense Calendar</h2>
      <Calendar  onChange={handleDateChange} value={selectedDate ?? undefined} />
      
      {selectedDate && (
        <div className="mt-4 bg-transparent">
          <h3 className="text-lg font-semibold">
            Expenses for {selectedDate.toDateString()}
          </h3>
          {filteredExpenses.length > 0 ? (
            <ul className="mt-2">
              {filteredExpenses.map((expense) => (
                <li key={expense.id} className="border-b p-2">
                  {expense.category}: <span className="font-bold">${expense.amount.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No expenses recorded on this date.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpenseCalendar;
