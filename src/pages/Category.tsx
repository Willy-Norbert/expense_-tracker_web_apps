import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Expense } from "../types/Expense";
import CategoryBreakdown from "../pages/CategoryBreakdown";


export default function CategoriesPage() {
  const [expenses] = useLocalStorage<Expense[]>("expenses", []);
  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Blank Page" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
          
          </h3>

          <div className="p-4">
      <h2 className="text-xl mb-4">Categories</h2>
      <CategoryBreakdown expenses={expenses} />
    </div>
        </div>
      </div>
    </div>
  );
}
