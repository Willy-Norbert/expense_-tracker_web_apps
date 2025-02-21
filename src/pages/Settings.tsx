import { useState } from "react";

interface Props {
  resetExpenses: () => void;
  setExpenses: (expenses: number[]) => void; // Updated to accept an array
}

function Settings({ resetExpenses, setExpenses }: Props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDataReset, setIsDataReset] = useState(false);

  const handleResetAllData = () => {
    const isDataPresent = localStorage.getItem("expenses");

    if (isDataPresent) {
      setIsPopupVisible(true);
      setProgress(0);
      setIsDataReset(false);

      // Simulate progress animation
      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress < 100) {
          currentProgress += 20;
          setProgress(currentProgress);
        } else {
          clearInterval(interval);
        }
      }, 500);

      setTimeout(() => {
        localStorage.removeItem("expenses");

        setExpenses([]); // Ensure it is set to an empty array
        resetExpenses();

        setIsDataReset(true);
      }, 2000);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">⚙️ Settings</h2>

      {/* Reset Data Button */}
      <button
        onClick={handleResetAllData}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        Reset All Data
      </button>

      {/* Progress & Confirmation Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center w-96">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              {isDataReset ? "✔️ Data Reset Complete" : "Resetting Data..."}
            </h3>

            {!isDataReset ? (
              <>
                <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-green-500 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{progress}%</p>
              </>
            ) : (
              <p className="text-sm text-green-600 mt-2">
                All data has been reset successfully.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
