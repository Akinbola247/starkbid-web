import React from 'react';
import { Filter } from 'lucide-react';

const FiltersButton: React.FC = () => {
  return (
    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition-colors">
      <Filter className="w-4 h-4" />
      <span>Filters</span>
    </button>
  );
};

export default FiltersButton;