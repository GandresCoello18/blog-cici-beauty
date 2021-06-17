import React from 'react';

export const ResenaVIdeo = () => (
  <div className="bg-white w-full flex items-center p-2 rounded-xl shadow border">
    <div className="flex items-center space-x-4">
      <img
        src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
        alt="My profile"
        className="w-16 h-16 rounded-full"
      />
    </div>
    <div className="flex-grow p-3">
      <div className="font-semibold text-gray-700">Antério Vieira da Silva Lima</div>
      <div className="text-sm text-gray-500">You: Thanks, sounds good! . 8hr</div>
    </div>
  </div>
);
