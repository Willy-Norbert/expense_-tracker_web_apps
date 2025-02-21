interface Props {
  totalSpent: number;
  savingTarget: number;
  expenses: { id: number; amount: number }[];
}

const MonthlySavingTarget: React.FC<Props> = ({ totalSpent, savingTarget, expenses }) => {
  const expenseCount = expenses.length;
  const reductionPerExpense = 0.7; // 0.7% reduction per expense

  // Calculate remaining progress, ensuring it doesn't go negative
  const totalProgress = Math.max(100 - expenseCount * reductionPerExpense, 0);

  return (
    <div className="bg-white p-6 shadow-2xl rounded-lg border border-gray-200 max-w-full mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Monthly Saving Target</h2>
      <div className="relative w-full h-24 md:h-20 mx-auto">
        <svg width="100%" height="100%" viewBox="0 0 36 18">
          <path fill="none" stroke="#e0e0e0" strokeWidth="4" d="M2 16 A14 14 0 0 1 34 16" />
          <path
            fill="none"
            stroke="#4caf50"
            strokeWidth="4"
            strokeDasharray={`${totalProgress}, 100`}
            d="M2 16 A14 14 0 0 1 34 16"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-semibold text-gray-900">{totalProgress.toFixed(1)}%</span>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-base md:text-lg font-medium text-gray-700">
          Total Spent: <span className="font-bold text-blue-600">RWF {totalSpent.toFixed(2)}</span>
        </p>
        <p className="text-base md:text-lg font-medium text-gray-700">
          Saving Target: <span className="font-bold text-blue-600">RWF {savingTarget.toFixed(2)}</span>
        </p>
        <p className="text-base md:text-lg font-medium text-gray-700">
          Expenses Made: <span className="font-bold text-blue-600">{expenseCount} expenses</span>
        </p>
      </div>
    </div>
  );
};

export default MonthlySavingTarget;
