import { Clock } from "lucide-react";
import type { Skip } from "../../interface/types";
import Button from "../ui/button";
import { useEffect } from "react";

interface SummaryProps {
  selectedSkip: Skip;
  handleContinue: () => void;
  handleBack: () => void;
}
const Summary = ({
  selectedSkip,
  handleContinue,
  handleBack,
}: SummaryProps) => {
    useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center p-4 z-50"  onClick={handleBack}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 scale-100 border border-gray-200"  onClick={e => e.stopPropagation()}>
        <div className="p-8">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start max-sm:flex-col max-sm:items-center justify-between space-x-4 mb-4">
              <img
                src={selectedSkip.image}
                alt={selectedSkip.size + " yard skip"}
                loading="lazy"
                className="w-24 h-24 object-cover rounded-xl flex-shrink-0 shadow-md max-sm:mx-auto"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1 max-sm:text-center">
                  {selectedSkip.size} Yard Skip
                </h3>
                <p className="text-gray-600 text-sm mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-blue-500" />
                  {selectedSkip.hire_period_days} days hire period
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Skip hire (14 days)</span>
                <span className="font-semibold">
                  £{selectedSkip.price_before_vat}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">
                    Total:
                  </span>
                  <span className="text-3xl font-bold text-gray-900">
                    £{selectedSkip.price_before_vat + selectedSkip.vat}
                  </span>
                </div>
                <p className="text-sm text-gray-500 text-right">inc. VAT</p>
              </div>
            </div>
          </div>
  <div className="my-4">
    <p className="text-xs  text-gray-500">
    <i><b>Note:</b> Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</i>
    </p>
  </div>
          <div className="flex space-x-4">
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
            <Button variant="primary" onClick={handleContinue}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
