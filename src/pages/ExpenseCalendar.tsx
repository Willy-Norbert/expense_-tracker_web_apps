import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Expense } from "../types/Expense";
import "../calendarStyles.css";

interface Props {
  expenses: Expense[];
}

const ExpenseCalendar: React.FC<Props> = ({ expenses }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [highlightedDates, setHighlightedDates] = useState<Date[]>([]);

  useEffect(() => {
    if (expenses.length === 0) return;

    const uniqueDates = Array.from(
      new Set(expenses.map((expense) => new Date(expense.date).toDateString()))
    ).map((dateString) => new Date(dateString));

    setHighlightedDates(uniqueDates);

    const latestExpense = expenses.reduce((latest, current) =>
      new Date(latest.date) > new Date(current.date) ? latest : current
    );
    setSelectedDate(new Date(latestExpense.date)); // Select latest expense date by default
  }, [expenses]);

  // Manually handle date selection (by clicking on the calendar date)
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date); // Update the selected date
  };

  // Filter expenses by selected date
  const filteredExpenses = selectedDate
    ? expenses.filter(
        (expense) =>
          new Date(expense.date).toDateString() === selectedDate.toDateString()
      )
    : [];

  const today = new Date();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">💰 Expense Calendar</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
          <Calendar
            value={selectedDate ?? today} // Default to the latest date or today
            onClickDay={handleDateSelect} // Handle date click
            tileClassName={({ date }) => {
              const isHighlighted = highlightedDates.some(
                (highlightedDate) =>
                  highlightedDate.toDateString() === date.toDateString()
              );
              const isToday = date.toDateString() === today.toDateString();
              return isToday ? "today highlighted" : isHighlighted ? "highlighted" : "";
            }}
          />
        </div>
        <div className="w-full lg:w-1/3 bg-gray-50 p-5 rounded-xl shadow-inner">
          {selectedDate ? (
            <>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Expenses for {selectedDate.toDateString()}
              </h3>
              {filteredExpenses.length > 0 ? (
                <ul className="space-y-3">
                  {filteredExpenses.map((expense) => (
                    <li
                      key={expense.id}
                      className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm"
                    >
                      <span className="text-sm font-medium text-gray-600">{expense.category}</span>
                      <span className="text-lg font-semibold text-gray-900">
                        RWF{expense.amount.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No expenses recorded on this date.</p>
              )}
            </>
          ) : (
            <p className="text-gray-500">Select a date to view expenses.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseCalendar;
