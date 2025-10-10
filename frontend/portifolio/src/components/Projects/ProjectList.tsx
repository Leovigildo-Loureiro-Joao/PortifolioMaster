import { motion } from "framer-motion";

interface ProjectFiltersProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FILTERS = ["All", "Mobile", "Web", "Desktop"];

export const ProjectFilters = ({ filter, setFilter }: ProjectFiltersProps) => {
  return (
    <div className="m-10 flex justify-center items-center gap-10">
      {FILTERS.map((value) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            filter === value
              ? "bg-primary text-white shadow-md"
              : "text-dark hover:text-primary hover:border-primary border"
          }`}
        >
          {value}
        </button>
      ))}
    </div>
  );
};