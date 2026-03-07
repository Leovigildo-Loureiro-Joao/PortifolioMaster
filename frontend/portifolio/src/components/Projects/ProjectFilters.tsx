import { motion } from "framer-motion";
import { FiGrid, FiMonitor, FiSmartphone } from "react-icons/fi";

interface ProjectFiltersProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FILTERS = [
  { id: "All", label: "Todos", icon: FiGrid },
  { id: "WEB", label: "Web", icon: FiMonitor },
  { id: "MOBILE", label: "Mobile", icon: FiSmartphone }
];

export const ProjectFilters = ({ filter, setFilter }: ProjectFiltersProps) => {
  return (
    <div className="my-10 flex justify-center items-center gap-4 flex-wrap">
      {FILTERS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setFilter(id)}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition-all sm:px-6 sm:py-3 sm:text-sm ${
            filter === id
              ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
              : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};
