import { Expense } from "../types/Expense";

interface Props {
  expenses: Expense[];
}

function CategoryBreakdown({ expenses }: Props) {
  const categories: { [key: string]: number } = {};
  let totalSum = 0;

  expenses.forEach((expense) => {
    if (categories[expense.category]) {
      categories[expense.category] += expense.amount;
    } else {
      categories[expense.category] = expense.amount;
    }
    totalSum += expense.amount;
  });

  return (
    <div className="bg-transparent p-4 shadow-md rounded">
      <h2 className="text-xl mb-4">Expense Breakdown by Category</h2>
      {Object.keys(categories).length === 0 ? (
        <p>No expenses recorded.</p>
      ) : (
        <>
          <ul>
            {Object.entries(categories).map(([category, total]) => (
              <li key={category} className="border-b p-2">
                {category}: <span className="font-bold">${total.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold text-lg">
            Total Expenses: ${totalSum.toFixed(2)}
          </p>
        </>
      )}
    </div>
  );
}

export default CategoryBreakdown;
