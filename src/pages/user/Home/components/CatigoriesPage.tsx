import React from 'react';
import { SquareProductPost } from '../../../../generalComponents';

const CategoriesPage = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      {/* Main Container */}
      <div className="w-full max-w-6xl">
        {/* Title: Browse by Categories */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Browse by Categories
        </h1>

        {/* Grid Container for Products */}
        <div className="grid grid-cols-4 gap-4 p-4">
          {/* Render 4 SquareProductPost components */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-full aspect-square">
              <SquareProductPost />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;