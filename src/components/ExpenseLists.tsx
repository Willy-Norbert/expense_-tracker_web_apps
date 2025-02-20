import { Expense } from "../types/Expense";

interface Props {
  expenses: Expense[];
  deleteExpense: (id: string) => void;
}

const ExpenseLists: React.FC<Props> = ({ expenses, deleteExpense }) => {
  return (
    <div className="bg-transparent p-4 shadow-md rounded">
     
      {expenses.length === 0 ? (
        <p className="text-center">--No expenses recorded.--</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Amount</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="text-center">
                <td className="border p-2">${expense.amount.toFixed(2)}</td>
                <td className="border p-2">{expense.category}</td>
                <td className="border p-2">{expense.description}</td>
                <td className="border p-2">{new Date(expense.date).toLocaleDateString()}</td>
                <td className="border p-2">
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseLists;
