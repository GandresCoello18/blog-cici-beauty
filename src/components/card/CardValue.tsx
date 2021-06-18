import React from 'react';

export const CardValue = () => (
  <div className="p-5 bg-white rounded shadow-sm">
    <div className="text-base text-gray-400 ">MRR</div>
    <div className="flex items-center pt-1">
      <div className="text-2xl font-bold text-gray-900 ">$250.00</div>
      <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
        <span>2.2%</span>
      </span>
    </div>
  </div>
);
