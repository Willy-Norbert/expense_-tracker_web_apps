import { Expense } from "../types/Expense";

interface Props {
  expenses: Expense[];
}

function CategoryBreakdown({ expenses }: Props) {
  const categoryMap: { [key: string]: { total: number; items: Expense[] } } = {};

  expenses.forEach((expense) => {
    const normalizedCategory = expense.category.toLowerCase(); // Normalize category to lowercase

    if (!categoryMap[normalizedCategory]) {
      categoryMap[normalizedCategory] = { total: 0, items: [] };
    }

    categoryMap[normalizedCategory].total += expense.amount;
    categoryMap[normalizedCategory].items.push(expense);
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Expense Breakdown by Category
      </h2>

      {Object.keys(categoryMap).length === 0 ? (
        <p className="text-gray-500 text-center">No expenses recorded.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.entries(categoryMap).map(([category, data], index) => (
            <div
              key={category}
              className={`p-5 rounded-lg shadow-md border ${
                index % 2 === 0 ? "bg-blue-50 border-blue-300" : "bg-gray-50 border-gray-300"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">
                {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize the first letter */}
              </h3>
              <ul className="mb-4">
                {data.items.map((expense) => (
                  <li key={expense.id} className="flex justify-between text-gray-700 py-1">
                    <span>{expense.description}</span>
                    <span className="font-medium">RWF{expense.amount.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t font-bold text-blue-700 flex justify-between">
                <span>Total:</span>
                <span>RWF{data.total.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryBreakdown;
