interface Props {
  totalSpent: number;
  savingTarget: number;
}

const MonthlySavingTarget: React.FC<Props> = ({ totalSpent, savingTarget }) => {
  const percentage = (totalSpent / savingTarget) * 100;
  const clampedPercentage = Math.min(percentage, 100); // Prevent overfill

  return (
    <div className="bg-transparent p-4 shadow-xl rounded text-center">
      <h2 className="text-xl mb-4">Saving Target</h2>
      <div className="relative w-32 h-16 mx-auto">
        <svg width="100%" height="100%" viewBox="0 0 36 18">
          <path
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="4"
            d="M2 16 A14 14 0 0 1 34 16"
          />
          <path
            fill="none"
            stroke="#4caf50"
            strokeWidth="4"
            strokeDasharray={`${clampedPercentage}, 100`}
            d="M2 16 A14 14 0 0 1 34 16"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">{clampedPercentage.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

export default MonthlySavingTarget;
