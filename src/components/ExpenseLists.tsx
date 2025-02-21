import { Expense } from "../types/Expense";

interface Props {
  expenses: Expense[];
  deleteExpense: (id: string) => void;
}

const ExpenseLists: React.FC<Props> = ({ expenses, deleteExpense }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg overflow-hidden">
      {/* Header with no expenses */}
      {expenses.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-lg">-- No expenses recorded yet --</p>
        </div>
      ) : (
        <table className="w-full table-auto text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border-b font-semibold">Amount</th>
              <th className="px-4 py-2 border-b font-semibold">Category</th>
              <th className="px-4 py-2 border-b font-semibold">Description</th>
              <th className="px-4 py-2 border-b font-semibold">Date</th>
              <th className="px-4 py-2 border-b font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b text-center">RWF{expense.amount.toFixed(2)}</td>
                <td className="px-4 py-3 border-b text-center capitalize">{expense.category}</td>
                <td className="px-4 py-3 border-b">{expense.description}</td>
                <td className="px-4 py-3 border-b text-center">{new Date(expense.date).toLocaleDateString()}</td>
                <td className="px-4 py-3 border-b text-center">
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
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
