import { Check } from "lucide-react";
import { processSteps } from "../../shared/string";
import Line from "../ui/line";

const FloatingSidebar = () => {
  return (
    <aside className="fixed md:left-6 md:top-6 bottom-6 w-80 md:inset-x-0 max-md:bottom-0 max-md:h-fit max-md:left-0 max-md:right-0 max-md:w-full bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20 z-40 overflow-hidden">
      <div className="h-full flex flex-col">
        <div className="flex-1 md:p-6 md:space-y-4 overflow-y-auto no-scrollbar">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative group">
              <div
                className={`flex items-center p-4 rounded-2xl transition-all duration-300 hover:bg-gray-50 max-md:${
                  step.current ? "block" : "hidden"
                }`}
              >
                <div
                  className={`
                    flex items-center justify-center w-14 h-14 rounded-2xl border-2 transition-all duration-500 shadow-lg
                    ${
                      step.completed
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-400 text-white shadow-green-200"
                        : step.current
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 border-blue-400 text-white shadow-blue-200 ring-4 ring-blue-100 scale-110"
                        : "border-gray-200 text-gray-400 bg-white shadow-gray-100"
                    }
                  `}
                >
                  {step.completed ? (
                    <Check className="w-7 h-7" />
                  ) : (
                    <step.icon className="w-7 h-7" />
                  )}
                </div>

                <div className="ml-5 flex-1">
                  <p
                    className={`
                      text-sm font-medium transition-colors duration-300
                      ${
                        step.completed
                          ? "text-green-600"
                          : step.current
                          ? "text-blue-600"
                          : "text-gray-400"
                      }
                    `}
                  >
                    Step {step.id}
                  </p>
                  <p
                    className={`
                      text-lg font-bold transition-colors duration-300
                      ${
                        step.completed
                          ? "text-green-700"
                          : step.current
                          ? "text-blue-700"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {step.name}
                  </p>
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <Line completed={step.completed} />
              )}
            </div>
          ))}
        </div>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700">
              Overall Progress
            </span>
            <span className="text-lg font-bold text-blue-600">
              {Math.round(
                (processSteps.filter((step) => step.completed).length /
                  processSteps.length) *
                  100
              )}
              %
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-1000 shadow-sm"
              style={{
                width: `${
                  (processSteps.filter((step) => step.completed).length /
                    processSteps.length) *
                  100
                }%`,
              }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            {processSteps.filter((step) => step.completed).length} of{" "}
            {processSteps.length} steps completed
          </p>
        </div>
      </div>
    </aside>
  );
};

export default FloatingSidebar;
