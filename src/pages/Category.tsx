import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Expense } from "../types/Expense";
import CategoryBreakdown from "../pages/CategoryBreakdown";

export default function CategoriesPage() {
  const [expenses] = useLocalStorage<Expense[]>("expenses", []);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");

  // Extract unique categories from expenses
  const categories = ["All Categories", ...new Set(expenses.map((expense) => expense.category))];

  // Filter expenses based on selected category
  const filteredExpenses =
    selectedCategory === "All Categories"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <div>
      <PageMeta
        title="Expense Categories | TailAdmin - Next.js Dashboard"
        description="Manage and view your categorized expenses efficiently."
      />
      <PageBreadcrumb pageTitle="Expense Categories" />
      
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
            Expense Categories
          </h3>

          {/* Category Selection Dropdown */}
          <div className="mb-6">
            <label htmlFor="category" className="block text-lg font-medium text-gray-700 dark:text-white">
              Select a Category
            </label>
            <select
              id="category"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Filtered Category Breakdown */}
          <div className="p-4">
            <CategoryBreakdown expenses={filteredExpenses} />
          </div>
        </div>
      </div>
    </div>
  );
}
