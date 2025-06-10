import { Check, ChevronRight, Clock, X } from "lucide-react";

import type { Skip } from "../../interface/types";
import Button from "../ui/button";

interface ProductCardProps {
  item: Skip;
  index: number;
  selectedSkip: { id: number } | null;
  handleSelectSkip: (skip: Skip) => void;
}

const ProductCard = ({
  item,
  selectedSkip,
  handleSelectSkip,
}: ProductCardProps) => {
  return (
    <div
      key={item.id}
      className={`
                  group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-transform ease-in-out duration-400 hover:shadow-2xl hover:-translate-y-2 border border-gray-100
                  ${
                    !item.allowed_on_road
                      ? "ring-2 ring-blue-400 ring-opacity-50"
                      : ""
                  }
                `}
    >
      {!item.allowed_on_road && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
            <X className="w-3 h-3 mr-1" />
            Not allowed on road
          </div>
        </div>
      )}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-gray-200">
          {item.size} {item.size > 1 ? "yards" : "yard"}
        </div>
      </div>
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.size + " yard skip"}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {item.size} Yard Skip
        </h3>
        <p className="text-gray-600 mb-3 flex items-center">
          <Clock className="w-4 h-4 mr-2 text-blue-500" />
          {item.hire_period_days} days hire period
        </p>

        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              £{item.price_before_vat + item.vat}
            </span>
            <span className="text-sm text-gray-500 ml-2">inc. VAT</span>
          </div>
        </div>

        <Button
          onClick={() => handleSelectSkip(item)}
          className={`
                      w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform relative overflow-hidden
                      ${
                        selectedSkip?.id === item.id
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-default shadow-lg shadow-green-200"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 active:scale-95 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300"
                      }
                    `}
        >
          {selectedSkip?.id === item.id ? (
            <span className="flex items-center justify-center">
              <Check className="w-6 h-6 mr-2" />
              Selected
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Select This Skip
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
