import PageBreadcrumb from "../components/common/PageBreadCrumb";

import PageMeta from "../components/common/PageMeta";

export default function AddExpense() {
  return (
    <>
      <PageMeta
        title="React.js Add Expense Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Add Expense Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Add Expense" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
         Expenses
        </h3>
        {/* <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
        </div> */}
      </div>
    </>
  );
}
