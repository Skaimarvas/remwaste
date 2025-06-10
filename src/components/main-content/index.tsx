import ProductCard from "../product-card";
import skips from "../../shared/data/mockData.json";
import type { Skip } from "../../interface/types";

interface MainContentProps {
  selectedSkip: Skip | null;
  handleSelectSkip: (skip: Skip) => void;
}
const MainContent = ({ selectedSkip, handleSelectSkip }: MainContentProps) => {
  return (
    <main className="md:ml-96 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
              Skip Size
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the skip size that best suits your needs
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skips.map((skip, index) => (
            <ProductCard
              key={skip.id}
              item={skip}
              index={index}
              selectedSkip={selectedSkip}
              handleSelectSkip={handleSelectSkip}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
