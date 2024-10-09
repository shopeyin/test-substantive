import React from "react";

function BarChartSkeletonLoader() {
  const bars = Array.from({ length: 20 }); // Adjust the length for more or fewer bars
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-gray-300 h-8 w-1/4 rounded mb-4" />
      <div className="flex items-end space-x-4 h-[600px]">
        {bars.map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded w-10 animate-pulse"
            style={{ height: `${Math.random() * 80 + 20}%` }} // Random height for effect
          />
        ))}
      </div>
    </div>
  );
}

export default BarChartSkeletonLoader;
