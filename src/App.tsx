import { useState } from "react";
import MainContent from "./components/main-content";
import FloatingSidebar from "./components/floating-sidebar";
import Summary from "./components/summary";
import type { Skip } from "./interface/types";

function App() {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const handleSelectSkip = (skip: Skip) => {
    if (selectedSkip && selectedSkip.id === skip.id) {
      if (selectedSkip && selectedSkip.id === skip.id) {
        setShowSummary((prev) => !prev);
        setSelectedSkip(null);
        return;
      }
    }
    setSelectedSkip(skip);
    setShowSummary(true);
  };

  const handleContinue = () => {
    setShowSummary(false);
  };

  const handleBack = () => {
    setShowSummary(false);
    setSelectedSkip(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 max-md:mb-48">
      <FloatingSidebar />
      <MainContent
        selectedSkip={selectedSkip}
        handleSelectSkip={handleSelectSkip}
      />

      {/* Enhanced Summary Modal */}
      {showSummary && selectedSkip && (
        <Summary
          selectedSkip={selectedSkip}
          handleContinue={handleContinue}
          handleBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
